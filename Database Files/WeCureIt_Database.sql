CREATE DATABASE WeCureIt_Database;
USE WeCureIt_Database;

DROP TABLE IF EXISTS `User`;
CREATE TABLE User(
   User_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   Email VARCHAR(50) NOT NULL,
   Password VARCHAR(255) NOT NULL,
   User_Type ENUM('doctor', 'patient', 'admin') NOT NULL,
   UNIQUE (Email)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO User (Email, Password, User_type)
VALUES 
('doctor@example.com', 'password12', 'doctor'),
('patient@example.com', 'password123', 'patient'),
('admin@example.com', 'password1234', 'admin');





DROP TABLE IF EXISTS `Admin`;
CREATE TABLE Admin (
  Admin_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Phone_Number VARCHAR(20),
  User_ID INT(5) NOT NULL,
  FOREIGN KEY (User_ID) REFERENCES User(User_ID)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO Admin (FirstName, LastName, Phone_number, User_ID)
VALUES 
('John', 'Doe', '123-456-7890', 3);





DROP TABLE IF EXISTS `Patient`;
CREATE TABLE Patient (
  Patient_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  First_name VARCHAR(50),
  Last_name VARCHAR(50),
  Phone_number VARCHAR(20),
  Address VARCHAR(100),
  City VARCHAR(50),
  ZipCode VARCHAR(10),
  User_id INT(5) NOT NULL,
  Preferred_facility_ID INT(5),
  Preferred_facility_specialization_ID INT(5),
  Appointment_id INT(5),
  FOREIGN KEY (User_ID) REFERENCES User(User_ID),
  FOREIGN KEY (Preferred_facility_ID) REFERENCES Facility(Facility_ID),
  FOREIGN KEY (Preferred_facility_specialization_ID) REFERENCES Facility_specialization(Facility_specialization_ID),
  FOREIGN KEY (Appointment_ID) REFERENCES Appointment(ID)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO Patient ( First_name, Last_name, Phone_number, Address, City, ZipCode, User_ID, Preferred_facility_ID, Preferred_facility_specialization_ID, Appointment_ID)
VALUES
  ('Bob', 'Johnson', '555-5678', '123 Main St', 'McLeam','221002', 2, 1, 1,1);
  


DROP TABLE IF EXISTS `Doctor`;
CREATE TABLE Doctor (
  Doctor_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  First_name VARCHAR(50),
  Last_name VARCHAR(50),
  Phone_number VARCHAR(20),
  Address VARCHAR(100),
  User_ID INT(5),
  Specialization_id INT(5),
  Work_ID INT(5),
  Facility_ID INT(5),
  Facility_specialization_ID INT(5),
  Appointment_ID INT(5),
  FOREIGN KEY (User_id) REFERENCES User(User_ID),
  FOREIGN KEY (Specialization_ID) REFERENCES Specialization(Specialization_ID),
  FOREIGN KEY (Work_ID) REFERENCES Work_schedule(Work_schedule_ID),
  FOREIGN KEY (Facility_ID) REFERENCES Facility(Facility_ID),
  FOREIGN KEY (Facility_specialization_ID) REFERENCES Facility_specialization(Facility_specialization_ID),
  FOREIGN KEY (Appointment_ID) REFERENCES Appointment(Appointment_ID)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO Doctor (First_name, Last_name, Phone_number, Address, User_ID, Specialization_ID, Work_ID, Facility_ID, Facility_specialization_ID, Appointment_ID)
VALUES 
   ('Mark', 'Lee', '5551112222', '789 Maple St', 1, 1, 3, 1, 1, 1);




DROP TABLE IF EXISTS `Facility`;
CREATE TABLE Facility (
  Facility_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Facility_Name VARCHAR(100),
  Address VARCHAR(100),
  City VARCHAR(50),
  Zipcode VARCHAR(10),
  Total_rooms INT(5),
  Available_rooms INT(5),
  Facility_specialization_ID INT(5),
  Doctor_facility_ID INT(5),
  FOREIGN KEY (Facility_specialization_ID) REFERENCES Facility_specialization(Facility_specialization_ID),
  FOREIGN KEY (Doctor_facility_ID) REFERENCES Doctor_facility(Doctor_facility_ID)
)ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO Facility (Facility_Name, Address, City, Zipcode, Total_rooms, Available_rooms, Facility_specialization_ID, Doctor_facility_ID)
VALUES 
('ABC Hospital', '123 Main Street', 'McLean', '22102', 100, 50, 1, 1);



DROP TABLE IF EXISTS `Doctor_facility`;
CREATE TABLE Doctor_facility(
  Doctor_facility_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Doctor_ID INT(5),
  Facility_ID INT(5),
  FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID),
  FOREIGN KEY (Facility_ID) REFERENCES Facility(Facility_ID)
)ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO Doctor_facility (Doctor_ID, Facility_ID) 
VALUES (1, 1);



DROP TABLE IF EXISTS `Facility_specialization`;
CREATE TABLE Facility_specialization (
  Facility_specialization_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Facility_ID INT(5),
  Specialization_ID INT(5),
  FOREIGN KEY (Facility_ID) REFERENCES Facility(Facility_ID),
  FOREIGN KEY (Specialization_ID) REFERENCES Specialization(Specialization_ID)
)ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO Facility_specialization (Facility_ID, Specialization_ID)
VALUES 
    (1, 1);
    
    




DROP TABLE IF EXISTS `Work_schedule`;
CREATE TABLE Work_schedule (
  Work_schedule_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Day_of_week VARCHAR(20),
  Start_time TIME,
  End_time TIME,
  Doctor_ID INT(5) NOT NULL,
  FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID)
)ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO Work_schedule (Day_of_week, Start_time, End_time, Doctor_id)
VALUES 
    ('Monday', '09:00:00', '16:00:00', 1);
    
    
    


DROP TABLE IF EXISTS `Specialization`;
CREATE TABLE Specialization (
  Specialization_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Specialization_name VARCHAR(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO Specialization (Specialization_ID,Specialization_name) VALUES
(1, 'Accident and emergency medicine'),
(2, 'Allergology'),
(3, 'Anaesthetics'),
(4, 'Biological hematology'),
(5, 'Cardiology'),
(6, 'Child psychiatry'),
(7, 'Clinical biology'),
(8, 'Clinical chemistry'),
(9, 'Clinical neurophysiology'),
(10, 'Clinical radiology'),
(11, 'Dental, oral and maxillo-facial surgery'),
(12, 'Dermato-venerology'),
(13, 'Dermatology'),
(14, 'Endocrinology'),
(15, 'Gastro-enterologic surgery'),
(16, 'Gastroenterology'),
(17, 'General hematology'),
(18, 'General Practice'),
(19, 'General surgery'),
(20, 'Geriatrics'),
(21, 'Immunology'),
(22, 'Infectious diseases'),
(23, 'Internal medicine'),
(24, 'Laboratory medicine'),
(25, 'Maxillo-facial surgery'),
(26, 'Microbiology'),
(27, 'Nephrology'),
(28, 'Neuro-psychiatry'),
(29, 'Neurology'),
(30, 'Neurosurgery'),
(31, 'Nuclear medicine'),
(32, 'Obstetrics and gynecology'),
(33, 'Occupational medicine'),
(34, 'Ophthalmology'),
(35, 'Orthopaedics'),
(36, 'Otorhinolaryngology'),
(37, 'Paediatric surgery'),
(38, 'Paediatrics'),
(39, 'Pathology'),
(40, 'Pharmacology'),
(41, 'Physical medicine and rehabilitation'),
(42, 'Plastic surgery'),
(43, 'Podiatric Medicine'),
(44, 'Podiatric Surgery'),
(45, 'Psychiatry'),
(46, 'Public health and Preventive Medicine'),
(47, 'Radiology'),
(48, 'Radiotherapy'),
(49, 'Respiratory medicine'),
(50, 'Rheumatology'),
(51, 'Stomatology'),
(52, 'Thoracic surgery'),
(53, 'Tropical medicine'),
(54, 'Urology'),
(55, 'Vascular surgery'),
(56, 'Venereology');






DROP TABLE IF EXISTS `Appointment`;
CREATE TABLE Appointment (
  Appointment_ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Patient_ID INT(5),
  Doctor_ID INT(5),
  Facility_ID INT(5),
  Appointment_date DATE,
  Appointment_time TIME,
  Appointment_duration INT,
  FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID),
  FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID),
  FOREIGN KEY (Facility_ID) REFERENCES Facility(Facility_ID)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO Appointment (Appointment_date, Appointment_time, Doctor_ID, Patient_ID, Facility_ID)
VALUES 
('2023-04-15', '10:00:00', 1, 1, 1);
