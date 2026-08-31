import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function yearsBetween(start: Date, end: Date): number {
  return Math.abs(end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24 / 365;
}

export function minutesDeveloped() {
  return (
    Math.abs(new Date("2016-07-01").getTime() - new Date().getTime()) /
    1000 /
    60
  );
}

export function minutesProductOwner() {
  return (
    Math.abs(new Date("2021-10-01").getTime() - new Date().getTime()) /
    1000 /
    60
  );
}

export function yearsDeveloped() {
  return minutesDeveloped() / 525600;
}

export function yearsProductOwner() {
  return minutesProductOwner() / 525600;
}

export function daysWorked() {
  // 365 days minus 104 saturdays and sundays minus 10 public holidays minus 25 holidays
  return yearsDeveloped() * 226;
}
