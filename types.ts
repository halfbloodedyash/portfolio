import React from 'react';

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  contact: {
    email: string;
    tel: string;
    social: {
      [key: string]: {
        name: string;
        url: string;
        icon: React.ComponentType<any>;
        navbar: boolean;
      };
    };
  };
  work: {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[];
  education: {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[];
  projects: {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: {
      type: string;
      href: string;
      icon: React.ComponentType<any>;
      label: string;
    }[];
    image: string;
    video?: string;
  }[];
  hackathons: {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: {
      title: string;
      icon: React.ComponentType<any>;
      href: string;
    }[];
  }[];
}