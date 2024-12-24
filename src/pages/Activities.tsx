import React from 'react';
import { activities } from '../data/activities';
import { ActivityCard } from '../components/ActivityCard';
import { BackButton } from '../components/BackButton';

export function Activities() {
  return (
    <div className="container mx-auto px-4 py-12">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Experiences & Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}