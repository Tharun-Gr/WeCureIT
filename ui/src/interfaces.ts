export interface SignInFormData {
    email: string;
    password: string;
}

export interface Admin {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
    user: User;
}

export interface AppointmentDetail {
    id: number;
    appointmentDate: string;
    appointmentTime: string;
    appointmentDuration: number;
}

export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
    user: User;
    patientAppointments: AppointmentDetail[];
}

export interface PatientSignUpData {
    email: string;
    password: string;
    userType: 'patient';
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
  }

export interface Doctor {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
    user: User;
    doctorAppointments: AppointmentDetail[];
    doctorWorkSchedules: WorkSchedule[];
    specialization: Specialization;
  }

export interface User {
    id: number;
    email: string;
    password: string;
    userType: string;
}

export interface Specialization {
    id: number;
    name: string;
}

export interface WorkSchedule {
    id: number;
    workDate: string;
    workStartTime: string;
    workEndTime: string;
}

export interface Room {
    id: number;
    appointment: AppointmentDetail[];
}

export interface Facility {
    id: number;
    name: string;
    phoneNumber: string;
    emailAddress: string | null;
    address: string;
    city: string;
    zipCode: string;
    appointments: AppointmentDetail[];
    workSchedules: WorkSchedule[] | null;
    rooms: Room[];
    specializations: Specialization[];
}

export interface Appointment {
    id: number;
    appointmentDate: string;
    appointmentTime: string;
    appointmentDuration: number;
    patient: Patient;
    doctor: Doctor;
    facility: Facility;
    room: Room;
}
  
export interface AppointmentRequest {
    appointmentDate: string;
    appointmentTime: string;
    appointmentDuration: number;
    patient: Patient | null;
    doctor: Doctor | null;
    facility: Facility | null;
    room: Room | null
}
