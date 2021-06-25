import {
  ChangeDetectorRef,
  Component, EventEmitter,
  HostListener, Input, OnChanges,
  OnInit, Output, SimpleChanges,
} from '@angular/core';

import {ISchedulingPanelMatrixStateItem, ISelectionRange, IDayHour} from '../interfaces';

@Component({
  selector: 'app-selection-panel',
  templateUrl: './selection-panel.component.html',
  styleUrls: ['./selection-panel.component.scss']
})
export class SelectionPanelComponent implements OnInit, OnChanges {
  @Output() save: EventEmitter<boolean[][]> = new EventEmitter<boolean[][]>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() days: string[] = null;
  @Input() hours: number[] = null;
  @Input() inputIncludedMatrix: boolean[][];
  private stateMatrix: ISchedulingPanelMatrixStateItem[][] = [];
  private lastDragOrigin: IDayHour = null;
  private isDragOriginAlreadyActive = false;
  private isDragging = false;
  private didUserDragAny = false;

  @HostListener('window:keydown.escape', ['$event'])
  handleEscapeKeyDown(event: KeyboardEvent): void {
    this.clearSelections();
  }

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

  ngOnInit(): void {
    this.initStateRefMatrix();
    this.initStateByInputIncludedMatrix();
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    requestAnimationFrame(() => this.cd.detectChanges);
  }

  public get isValid(): boolean {
    return this.isAnythingSelected();
  }

  private isAnythingSelected(): boolean {
    for (let day = 0; day < this.days.length; day++) {
      for (let hour = 0; hour < this.hours.length; hour++) {
        if (this.stateMatrix[day][hour].included) {
          return true;
        }
      }
    }
    return false;
  }

  public get isEditingAnExistingData(): boolean {
    return Boolean(this.inputIncludedMatrix);
  }

  private createDayHourPair(day: number, hour: number): IDayHour {
    return {day, hour};
  }

  private isTheSameDayHour(itemA: IDayHour, itemB: IDayHour): boolean {
    return itemA.day === itemB.day && itemA.hour === itemB.hour;
  }

  private initStateRefMatrix(): void {
    for (let day = 0; day < this.days.length; day++) {
      this.stateMatrix[day] = [];
      for (let hour = 0; hour < this.hours.length; hour++) {
        this.stateMatrix[day][hour] = {
          included: true,
          drag: {isOrigin: false, isSelection: false}
        };
      }
    }
  }

  private initStateByInputIncludedMatrix(): void {
    if (!this.inputIncludedMatrix) {
      return;
    }
    for (let day = 0; day < this.days.length; day++) {
      for (let hour = 0; hour < this.hours.length; hour++) {
        this.stateMatrix[day][hour].included = this.inputIncludedMatrix[day][hour];
      }
    }
  }

  public setAllAs(include: boolean): void {
    for (let day = 0; day < this.days.length; day++) {
      for (let hour = 0; hour < this.hours.length; hour++) {
        this.stateMatrix[day][hour].included = include;
      }
    }
    this.cd.detectChanges();
  }

  private isDragOrigin(pair: IDayHour): boolean {
    return this.stateMatrix[pair.day][pair.hour].drag.isOrigin;
  }

  private isDragSelection(pair: IDayHour): boolean {
    return this.stateMatrix[pair.day][pair.hour].drag.isSelection;
  }

  private toggleClickedPanelDayHour(pair: IDayHour): void {
    this.stateMatrix[pair.day][pair.hour].included = !this.stateMatrix[pair.day][pair.hour].included;
  }

  private toggleDragSelectionItems(pair: IDayHour): void {
    const shouldIncludeSelectedItems = !this.isDragOriginAlreadyActive;
    this.toggleSelectedDayHourPairs(this.lastDragOrigin, pair, shouldIncludeSelectedItems);
  }

  private isIncluded(pair: IDayHour): boolean {
    return this.stateMatrix[pair.day][pair.hour].included;
  }

  private isHourMostlyIncluded(hour: number): boolean {
    let includedCount = 0, max = 0;
    for (const day of this.stateMatrix) {
      if (day[hour].included) {
        includedCount++;
      }
      max++;
    }
    return includedCount > max / 2;
  }

  public toggleHour(event: Event, hour: number): void {
    const isHourShouldBeIncluded = !this.isHourMostlyIncluded(hour);
    for (let day = 0; day < this.days.length; day++) {
      this.stateMatrix[day][hour].included = isHourShouldBeIncluded;
    }
    this.cd.detectChanges();
  }

  private isDayMostlyIncluded(day: number): boolean {
    let includedCount = 0, max = 0;
    for (const activeHour of this.stateMatrix[day]) {
      if (activeHour.included) {
        includedCount++;
      }
      max++;
    }
    return includedCount > max / 2;
  }

  public toggleDay(event: Event, day: number): void {
    const isDayShouldBeIncluded = !this.isDayMostlyIncluded(day);
    for (let hour = 0; hour < this.hours.length; hour++) {
      this.stateMatrix[day][hour].included = isDayShouldBeIncluded;
    }
    this.cd.detectChanges();
  }

  private onDragStart(pair: IDayHour): void {
    this.isDragging = true;
    this.stateMatrix[pair.day][pair.hour].drag.isOrigin = true;
    this.lastDragOrigin = pair;
    this.isDragOriginAlreadyActive = this.isIncluded(pair);
  }

  private onDragEnter(pair: IDayHour): void {
    if (!this.isDragging) {
      return;
    }
    this.clearDragSelectionState();
    if (this.lastDragOrigin) {
      this.setDragSelectionState(this.lastDragOrigin, pair);
    }
    this.cd.detectChanges();
  }

  private isClick(pair: IDayHour): boolean {
    return this.isDragging && this.lastDragOrigin && this.isTheSameDayHour(this.lastDragOrigin, pair) && !this.didUserDragAny;
  }

  private isDragDrop(pair: IDayHour): boolean {
    return this.isDragging && this.lastDragOrigin && !this.isTheSameDayHour(this.lastDragOrigin, pair) && this.didUserDragAny;
  }

  public onMouseDown(event: MouseEvent, day: number, hour: number): void {
    this.onDragStart(this.createDayHourPair(day, hour));
  }

  public onMouseEnter(event: MouseEvent, day: number, hour: number): void {
    const pair: IDayHour = this.createDayHourPair(day, hour);
    this.onDragEnter(pair);
  }

  private detectSelectToggleMethod(pair: IDayHour): (IDayHour) => void {
    if (this.isClick(pair)) {
      return this.toggleClickedPanelDayHour.bind(this);
    } else if (this.isDragDrop(pair)) {
      return this.toggleDragSelectionItems.bind(this);
    }
    return null;
  }

  private toggleSelectedDayHourItemsHandler(pair: IDayHour): void {
    const toggleMethodDetected = this.detectSelectToggleMethod(pair);
    if (toggleMethodDetected) {
      toggleMethodDetected(pair);
    }
  }

  public onMouseUp(event: MouseEvent, day: number, hour: number): void {
    this.toggleSelectedDayHourItemsHandler(
      this.createDayHourPair(day, hour)
    );
    this.clearSelections();
  }

  public onMouseLeavesPanel(): void {
    this.clearSelections();
  }

  private clearSelections(): void {
    this.clearSelectionState();
    this.cd.detectChanges();
  }

  private clearSelectionState(): void {
    this.clearDragState();
  }

  private clearDragState(): void {
    for (let day = 0; day < this.days.length; day++) {
      for (let hour = 0; hour < this.hours.length; hour++) {
        this.stateMatrix[day][hour].drag.isOrigin = false;
        this.stateMatrix[day][hour].drag.isSelection = false;
      }
    }
    this.lastDragOrigin = null;
    this.didUserDragAny = false;
    this.isDragging = false;
    this.isDragOriginAlreadyActive = false;
  }

  private clearDragSelectionState(): void {
    for (let day = 0; day < this.days.length; day++) {
      for (let hour = 0; hour < this.hours.length; hour++) {
        this.stateMatrix[day][hour].drag.isSelection = false;
      }
    }
  }

  private setDragSelectionState(origin: IDayHour, end: IDayHour): void {
    if (!this.isTheSameDayHour(origin, end)) {
      this.didUserDragAny = true;
    }

    const selectionRange = this.getSelectionRange(origin, end);
    for (let day = selectionRange.day.min; day <= selectionRange.day.max; day++) {
      for (let hour = selectionRange.hour.min; hour <= selectionRange.hour.max; hour++) {
        this.stateMatrix[day][hour].drag.isSelection = true;
      }
    }
  }

  private getSelectionRange(origin: IDayHour, end: IDayHour): ISelectionRange {
    return {
      day: {
        max: Math.max(origin.day, end.day),
        min: Math.min(origin.day, end.day)
      },
      hour: {
        min: Math.min(origin.hour, end.hour),
        max: Math.max(origin.hour, end.hour)
      }
    };
  }

  private toggleSelectedDayHourPairs(origin: IDayHour, end: IDayHour, shouldBeIncluded: boolean): void {
    const selectionRange = this.getSelectionRange(origin, end);
    for (let day = selectionRange.day.min; day <= selectionRange.day.max; day++) {
      for (let hour = selectionRange.hour.min; hour <= selectionRange.hour.max; hour++) {
        this.stateMatrix[day][hour].included = shouldBeIncluded;
      }
    }
  }

  public getPanelItemClass(day: number, hour: number): string {
    const pair: IDayHour = this.createDayHourPair(day, hour);
    const classes = [];
    if (this.isIncluded(pair)) {
      classes.push('included');
    }
    if (this.isDragSelection(pair)) {
      if (this.isDragOrigin(pair)) {
        classes.push('drag-origin');
      } else {
        classes.push('drag-selection');
      }
    }

    return classes.join(' ');
  }

  private getIncludedStateMatrix(): boolean[][] {
    const mat: boolean[][] = [];
    for (let day = 0; day < this.days.length; day++) {
      mat[day] = [];
      for (let hour = 0; hour < this.hours.length; hour++) {
        mat[day][hour] = this.stateMatrix[day][hour].included;
      }
    }
    return mat;
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public onSave(): void {
    this.save.emit(this.getIncludedStateMatrix());
  }

}
