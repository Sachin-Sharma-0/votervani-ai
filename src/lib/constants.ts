export interface UserContext {
  age: number;
  state: string;
  district: string;
  voterStatus: 'registered' | 'not_registered' | 'unsure';
  electionType: 'lok_sabha' | 'state_assembly';
}

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const ELECTION_PHASES = [
  { id: 1, title: "Announcement", description: "The ECI announces the election schedule and the Model Code of Conduct (MCC) comes into force." },
  { id: 2, title: "Notification", description: "The President/Governor issues a notification calling upon constituencies to elect members." },
  { id: 3, title: "Nominations", description: "Candidates file their nomination papers with the Returning Officer (RO)." },
  { id: 4, title: "Scrutiny", description: "The RO examines the nomination papers to ensure they are valid." },
  { id: 5, title: "Withdrawal", description: "Candidates have a window to withdraw their nominations if they choose." },
  { id: 6, title: "Campaigning", description: "Candidates and parties reach out to voters. Campaigns must stop 48 hours before polling ends." },
  { id: 7, title: "Polling", description: "Voters go to their assigned polling booths to cast their votes using EVMs/VVPATs." },
  { id: 8, title: "Counting", description: "Votes are counted under strict supervision and results are compiled." },
  { id: 9, title: "Results", description: "Winners are declared and the final result is notified to the government." }
];
