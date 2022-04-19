export interface Achievement {
  title: string;
  description?: string;
}

export interface TimelineList {
  year: string;
  achievements: Achievement[];
}
