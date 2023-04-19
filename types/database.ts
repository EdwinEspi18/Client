export interface Currencies {
  id: string /* primary key */;
  name: string;
  code: string;
}

export interface Item_types {
  id: string /* primary key */;
  name: string;
}

export interface Payment_methods {
  id: string /* primary key */;
  name: string;
  created_at?: string;
}

export interface Appointment_states {
  id: string /* primary key */;
  name: string;
  created_at?: string;
}

export interface Store_expense_categories {
  id: string /* primary key */;
  name: string;
  created_at?: string;
}

export interface Store_categories {
  id: string /* primary key */;
  name?: string;
}

export interface Profiles {
  id: string /* primary key */;
  updated_at?: string;
  name?: string;
  avatar_url?: string;
}

export interface Store_schedules {
  profile_id: string /* primary key */ /* foreign key to profiles.id */;
  day: number /* primary key */;
  is_closed: boolean;
  time_from: string;
  time_to: string;
  lunch_time_from?: string;
  lunch_time_to?: string;
  profiles?: Profiles;
}

export interface Store_expenses {
  id: string /* primary key */;
  profile_id: string /* foreign key to profiles.id */;
  amount: any; // type unknown;
  created_at?: string;
  expense_category_id: string /* foreign key to store_expense_categories.id */;
  title?: string;
  note?: string;
  payment_method_id: string /* foreign key to payment_methods.id */;
  profiles?: Profiles;
  store_expense_categories?: Store_expense_categories;
  payment_methods?: Payment_methods;
}

export interface Customers {
  id: string /* primary key */;
  name: string;
  birthdate?: string;
  phone_number?: string;
  note?: string;
  created_by: string /* foreign key to profiles.id */;
  created_at: string;
  email?: string;
  profiles?: Profiles;
}

export interface Store_images {
  profile_id: string /* primary key */ /* foreign key to profiles.id */;
  image_url: string;
  created_at?: string;
  route: string;
  sequence: number /* primary key */;
  profiles?: Profiles;
}

export interface Store_ratings {
  owner_id: string /* primary key */ /* foreign key to profiles.id */;
  customer_id: string /* primary key */ /* foreign key to customers.id */;
  rating: any; // type unknown;
  comment?: string;
  created_at?: string;
  profiles?: Profiles;
  customers?: Customers;
}

export interface Appointments {
  id: string /* primary key */;
  owner_id: string;
  customer_id: string /* foreign key to customers.id */;
  appointment_from: string;
  appointment_to: string;
  created_at: string;
  note?: string;
  state_id?: string /* foreign key to appointment_states.id */;
  total_amount: any; // type unknown;
  pending_amount: any; // type unknown;
  paid_amount: any; // type unknown;
  customers?: Customers;
  appointment_states?: Appointment_states;
}

export interface Items {
  id: string /* primary key */;
  item_type_id: string /* foreign key to item_types.id */;
  owner_id: string /* foreign key to profiles.id */;
  name: string;
  price: any; // type unknown;
  duration_in_minutes?: number;
  quantity: number;
  created_at: string;
  item_types?: Item_types;
  profiles?: Profiles;
}

export interface Appointment_details {
  appointment_id: string /* primary key */ /* foreign key to appointments.id */;
  item_id: string /* primary key */ /* foreign key to items.id */;
  duration_in_minutes?: number;
  quantity: number;
  price: any; // type unknown;
  total: any; // type unknown;
  appointments?: Appointments;
  items?: Items;
}

export interface Appointment_payments {
  id: string /* primary key */;
  customer_id: string /* foreign key to customers.id */;
  appointment_id: string /* foreign key to appointments.id */;
  amount: any; // type unknown;
  created_at?: string;
  customers?: Customers;
  appointments?: Appointments;
}

export interface Stores {
  profile_id: string /* primary key */;
  name?: string;
  address?: string;
  email?: string;
  phone_number?: string;
  longitude?: any; // type unknown;
  latitude?: any; // type unknown;
  category_id: string /* foreign key to store_categories.id */;
  schedule_cell_minutes_interval: number;
  time_format_24h: boolean;
  appointment_reminder: boolean;
  is_private: boolean;
  currency_id: string /* foreign key to currencies.id */;
  color_hex: string;
  store_categories?: Store_categories;
  currencies?: Currencies;
}

export interface Appointment_with_details {
  id?: string /* primary key */;
  owner_id?: string;
  customer_id?: string /* foreign key to customers.id */;
  appointment_from?: string;
  appointment_to?: string;
  created_at?: string;
  note?: string;
  state_id?: string /* foreign key to appointment_states.id */;
  total_amount?: any; // type unknown;
  appointment_details?: JSON;
  appointment_payments?: JSON;
  pending_amount?: any; // type unknown;
  paid_amount?: any; // type unknown;
  customers?: Customers;
  appointment_states?: Appointment_states;
}
