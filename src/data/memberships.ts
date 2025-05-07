import { MembershipPlan } from '../types';

export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 29.99,
    period: "monthly",
    features: [
      "Full access to gym equipment",
      "Standard operating hours",
      "Access to locker rooms",
      "Free fitness assessment",
      "Online workout tracking"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 49.99,
    period: "monthly",
    features: [
      "Full access to gym equipment",
      "Extended hours access",
      "Access to locker rooms and saunas",
      "2 personal training sessions/month",
      "Group fitness classes",
      "Online workout tracking",
      "Nutrition consultation"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    price: 79.99,
    period: "monthly",
    features: [
      "24/7 gym access",
      "Access to all gym facilities",
      "4 personal training sessions/month",
      "Unlimited group fitness classes",
      "Advanced performance tracking",
      "Monthly nutrition consultation",
      "Recovery zone access",
      "Guest passes (2 per month)"
    ]
  }
];