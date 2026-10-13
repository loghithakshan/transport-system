// Mock database for VStudy College Transport Management System

export const studentData = {
  name: "Aishwarya S",
  regNo: "192312533",
  department: "School of Engineering (SIMATS)",
  avatarText: "A",
  avatarUrl: "/profile.png",
  passStatus: "Active",
  validTill: "20 Jul 2026", // Will be formatted dynamically in pages
  pickupBus: {
    number: "TN87E2268",
    route: "6B - Thiruverkadu",
    time: "07:30",
    from: "Thiruverkadu",
    to: "SIMATS Campus",
  },
  dropBus: {
    number: "TN87E2268",
    route: "6B - Thiruverkadu",
    time: "15:30",
    from: "SIMATS Campus",
    to: "Thiruverkadu",
    expectedDropTime: "16:45"
  }
};

export const driverData = {
  name: "R. Selvam",
  phone: "+91 98765 43210",
  rating: 4.8,
  experience: "8 years",
  status: "On Trip",
  avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Selvam"
};

export const busData = {
  plateNumber: "TN87E2268",
  routeName: "6B - Thiruverkadu",
  capacity: 55,
  occupied: 42,
  speed: 48, // km/h
  distanceRemaining: "3.2 km",
  eta: "10 mins",
  nextStop: "Thiruverkadu Arch",
  status: "On Schedule"
};

// Route polyline coordinates around Chennai area (from Poonamallee SIMATS to Thiruverkadu)
export const routeCoordinates = [
  { lat: 13.0280, lng: 80.0762, name: "SIMATS Campus (Start)" },
  { lat: 13.0350, lng: 80.0900, name: "Poonamallee Bypass" },
  { lat: 13.0550, lng: 80.1050, name: "Kumananchavadi" },
  { lat: 13.0640, lng: 80.1180, name: "Mangadu Junction" },
  { lat: 13.0710, lng: 80.1260, name: "Velappanchavadi" },
  { lat: 13.0780, lng: 80.1210, name: "Thiruverkadu Arch" },
  { lat: 13.0850, lng: 80.1180, name: "Thiruverkadu Bus Terminus" }
];

export const notificationsList = [
  {
    id: 1,
    title: "Route Update",
    message: "Bus 6B is running on schedule for Thiruverkadu route.",
    time: "2 mins ago",
    type: "info"
  },
  {
    id: 2,
    title: "Pass Renewed",
    message: "Your transport pass has been verified for the current semester.",
    time: "1 day ago",
    type: "success"
  }
];

