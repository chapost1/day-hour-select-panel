import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
// import {Utils} from '../../../../../../../../common/utils';
import {ISchedulingSummaryHourKeyDaysPair} from '../interfaces';

@Component({
  selector: 'app-summary',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Output() editSchedule: EventEmitter<void> = new EventEmitter<void>();
  @Input() includedMatrix: boolean[][] = null;
  @Input() days: string[] = null;
  @Input() hours: number[] = null;
  public summary = '';

  ngOnInit(): void {
    this.summary = this.getSummary();
  }

  private hoursToHoursKey(hours: number[]): string {
    return hours.join(',');
  }

  private hoursKeyToHours(hours: string): number[] {
    return hours.split(',').map(hour => Number(hour));
  }

  private getDaysByHoursGrouping(): Map<string, number[]> {
    const groups: Map<string, number[]> = new Map();
    for (let day = 0; day < this.days.length; day++) {
      const dayHours = [];
      for (let hour = 0; hour < this.hours.length; hour++) {
        if (this.includedMatrix[day][hour]) {
          dayHours.push(hour);
        }
      }
      const dayHoursKey = this.hoursToHoursKey(dayHours);
      if (dayHoursKey === '') {
        continue;
      }
      if (groups.has(dayHoursKey)) {
        groups.get(dayHoursKey).push(day);
      } else {
        groups.set(dayHoursKey, [day]);
      }
    }
    return groups;
  }

  private hoursKeyToGroupsOfLinkedHours(hoursKey: string): number[][] {
    const hours: number[] = this.hoursKeyToHours(hoursKey);
    const groups: number[][] = [];
    if (hours.length < 1) {
      return groups;
    }
    let lastHour = hours[0];
    let currGroup = [lastHour];
    for (let i = 1; i < hours.length; i++) {
      if (lastHour + 1 < hours[i]) {
        groups.push(currGroup);
        currGroup = [hours[i]];
      } else {
        currGroup.push(hours[i]);
      }
      lastHour = hours[i];
    }
    groups.push(currGroup);
    return groups;
  }

  private hourSummaryFormat(hour: number): string {
    if (hour < 10) {
      return `0${hour}:00`;
    }
    return `${hour}:00`;
  }

  private hoursRangeFormat(since: number, until: number): string {
    if (since === until) {
      return `(${this.hourSummaryFormat(since)})`;
    }
    return `(${this.hourSummaryFormat(since)} - ${this.hourSummaryFormat(until)})`;
  }

  private isAllDay(hours): boolean {
    return (hours.length === this.hours.length);
  }

  private isAllWeek(days): boolean {
    return (days.length === this.days.length);
  }

  private isLinkedHoursGroupsHasWholeDayInIt(groups: number[][]): boolean {
    return groups.length === 1 && this.isAllDay(groups[0]);
  }

  private hoursKeyToSummaryText(hoursKey: string): string {
    const summaryKeys: string[] = [];

    const groupsOfLinkedHours: number[][] = this.hoursKeyToGroupsOfLinkedHours(hoursKey);
    const isAllDay: boolean = this.isLinkedHoursGroupsHasWholeDayInIt(groupsOfLinkedHours);
    for (const group of groupsOfLinkedHours) {
      summaryKeys.push(this.hoursRangeFormat(group[0], group[group.length - 1]));
    }

    const dayPart = isAllDay ? 'All Day' : 'Partial';

    return `${dayPart} ${summaryKeys.join(', ')}`;
  }

  private titleCase(value: string): string {
    if (!value) {
      return value;
    }

    const split = value.replace(new RegExp('_', 'g'), ' ').split(' ');

    return split.map(word => word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase()).join(' ');
  }

  private getDaysNamesLineText(days: number[]): string {
    if (this.isAllWeek(days)) {
      return 'All Week';
    }
    return days.map(day => this.titleCase(this.days[day])).join(', ');
  }

  private hoursGroupsToSummaryLines(groups: ISchedulingSummaryHourKeyDaysPair[]): string[] {
    const summary: string[] = [];

    for (const pair of groups) {
      const hours: string = this.hoursKeyToSummaryText(pair.hoursKey);
      const daysSummary: string = this.getDaysNamesLineText(pair.days);
      summary.push(`${daysSummary}: ${hours}`);
    }

    return summary;
  }

  private summarizeDaysByHoursGroupingsToSortedArraysByDaysAsc(groups: Map<string, number[]>): ISchedulingSummaryHourKeyDaysPair[] {
    const daysByHoursGroupingsPairs: ISchedulingSummaryHourKeyDaysPair[] = [];
    groups.forEach((days, hoursKey) => {
      daysByHoursGroupingsPairs.push({
        hoursKey,
        days
      });
    });

    return daysByHoursGroupingsPairs.sort((pairA, pairB) => {
      return Math.max(...pairA.days) - Math.max(...pairB.days);
    });
  }

  private getSummary(): string {
    if (!this.includedMatrix) {
      return;
    }
    const summary = this.hoursGroupsToSummaryLines(
      this.summarizeDaysByHoursGroupingsToSortedArraysByDaysAsc(
        this.getDaysByHoursGrouping()
      )
    );
    return summary.map(line => `<span class="summary-line">${line}</span>`).join('');
  }

  public onEditSchedule(): void {
    this.editSchedule.emit();
  }

}
