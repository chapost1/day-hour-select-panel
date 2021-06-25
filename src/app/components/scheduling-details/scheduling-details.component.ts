import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IDayHour} from './interfaces';

@Component({
  selector: 'app-scheduling-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scheduling-details.component.html',
  styleUrls: ['./scheduling-details.component.scss']
})
export class SchedulingDetailsComponent implements OnInit, AfterViewInit {
  private EDIT_PANEL_ANIMATION_TIME_IN_MS = 500;
  private dayHourPairs: IDayHour[] = null;
  public days: string[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  public hours: number[] = [];
  public isEdit = false;
  public isEditPanelVisible = false;
  public includedMatrix: boolean[][] = null;

  private static parseBooleanMatrixToDayHourPairs(booleanMatrix: boolean[][], days: number, hours: number): IDayHour[] {
    const pairs: IDayHour[] = [];
    for (let day = 0; day < days; day++) {
      for (let hour = 0; hour < hours; hour++) {
        if (!booleanMatrix[day][hour]) {
          continue;
        }
        pairs.push({
          day,
          hour
        });
      }
    }
    return pairs;
  }

  ngOnInit(): void {
    this.initHoursArray();
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.enterEditMode();
    });
  }

  public get editPanelTransitionAttributeValue(): string {
    return `all ${this.EDIT_PANEL_ANIMATION_TIME_IN_MS}ms ease`;
  }

  private initHoursArray(): void {
    for (let i = 0; i < 24; i++) {
      this.hours[i] = i;
    }
  }

  private get isThereAnySelectionToSummarize(): boolean {
    return Boolean(this.includedMatrix);
  }

  public get shouldVisualizeEditPanel(): boolean {
    return this.isEdit || !this.isThereAnySelectionToSummarize;
  }

  public get shouldVisualizeSummaryPanel(): boolean {
    return !this.shouldVisualizeEditPanel;
  }

  public getDayHourPairs(): IDayHour[] {
    return this.dayHourPairs;
  }

  public onPanelSave(included: boolean[][]): void {
    this.includedMatrix = included;
    this.updateDayHourPairs();
    this.exitEditMode();
  }

  private updateDayHourPairs(): void {
    this.dayHourPairs = SchedulingDetailsComponent.parseBooleanMatrixToDayHourPairs(
      this.includedMatrix,
      this.days.length,
      this.hours.length
    );
  }

  public onPanelCancel(): void {
    if (this.isThereAnySelectionToSummarize) {
      this.exitEditMode();
    } else {
      this.exitEditMode();
    }
  }

  public enterEditMode(): void {
    this.isEdit = true;
    this.showEditPanel();
  }

  private showEditPanel(): void {
    requestAnimationFrame(() => {
      this.isEditPanelVisible = true;
    });
  }

  private exitEditMode(onPanelExitAnimationComplete?: (...args) => any): void {
    this.hideEditPanel(() => {
      this.isEdit = false;
      if (onPanelExitAnimationComplete) {
        onPanelExitAnimationComplete();
      }
    });
  }

  private hideEditPanel(onPanelExitAnimationComplete?: (...args) => any): void {
    this.isEditPanelVisible = false;
    this.onEditPanelExitAnimationComplete(onPanelExitAnimationComplete);
  }

  private onEditPanelExitAnimationComplete(onPanelExitAnimationComplete?: (...args) => any): void {
    setTimeout(() => {
      if (onPanelExitAnimationComplete) {
        onPanelExitAnimationComplete();
      }
    }, this.EDIT_PANEL_ANIMATION_TIME_IN_MS);
  }

}
