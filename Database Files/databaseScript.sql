CREATE DATABASE WeCureIt;
USE WeCureIt;




DROP TABLE IF EXISTS `Admin`;
CREATE TABLE IF NOT EXISTS `Admin` (
   `adminid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`adminid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `Admin` (`email`, `password`) VALUES
('admin@pp.com', 'wecureit123');




DROP TABLE IF EXISTS `Doctor`;
CREATE TABLE IF NOT EXISTS `Doctor` (
  `docid` int(11) NOT NULL AUTO_INCREMENT,
  `docemail` varchar(255) NOT NULL,
  `docphone` int(9) NOT NULL,
  `docname` varchar(255) NOT NULL,
  `docpassword` varchar(255) NOT NULL,
  `specialties` int(2) NOT NULL,
  PRIMARY KEY (`docid`),
  KEY `specialties` (`Specialties`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO `doctor` (`docid`, `docemail`, `docphone`, `docname`, `docpassword`, `specialties`) VALUES
(1, 'doctor@wecureit.com', '2028947565','Test Doctor]', 'wecureitdoc 123', 1);



DROP TABLE IF EXISTS `Patient`;
CREATE TABLE IF NOT EXISTS `Patient` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `pemail` varchar(255) NOT NULL,
  `pname` varchar(255) NOT NULL,
  `ppassword` varchar(255) NOT NULL,
  `paddress` varchar(255) NOT NULL,
  `pdob` date NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO `patient` (`pid`, `pemail`, `pname`, `ppassword`, `paddress`,  `pdob` ) VALUES
(1, 'patient@edoc.com', 'Test Patient', 'patient123', 'USA',  '2000-01-01'),
(2, 'josh@gmail.com', 'josh', 'patient1123', 'USA',  '2022-06-03');




DROP TABLE IF EXISTS `Specialties`;
CREATE TABLE IF NOT EXISTS `Specialties` (
  `id` int(2) NOT NULL,
  `sname` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `Specialties` (`id`, `sname`) VALUES
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






CREATE TABLE `Facility` (
  `facilityID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `town` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `contact` bigint(20) NOT NULL,
  PRIMARY KEY (`facilityID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



INSERT INTO `clinic` (`cid`, `name`, `address`, `Zipcode`, `city`, `contact`) VALUES
(1, 'DCFaility', 'ACE Apartments', 'Foggy Bottom', '25415', 'DC', 2025874698);






CREATE TABLE `Appointment` (
  `AppointmentID` int(11) NOT NULL AUTO_INCREMENT,
  `DoctorID` int(30) REFERENCES Doctor(docid),
  `PatientID` int(30) REFERENCES Patient(pid),
  `FacilityID` int(30) REFERENCES Facility(facilityid),
  `Time` time NOT NULL,
  PRIMARY KEY (`AppointmentID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `Appointment` (`AppointmentID`, `DoctorID`, `PatientID`, `FacilityID`, `Time`) VALUES
(1, 1 , 1, '18:00:00');

 

CREATE TABLE `doctor_availability` (
  `daid` int(11) NOT NULL AUTO_INCREMENT,
  `Doctorid` int(11) REFERENCES Doctor(docid),
  `day` varchar(50) NOT NULL,
  `starttime` time NOT NULL,
  `endtime` time NOT NULL,
  PRIMARY KEY (`daid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



INSERT INTO `doctor_availability` (`cid`, `did`, `day`, `starttime`, `endtime`) VALUES
(1, 1, 'Friday', '14:00:00', '18:00:00'),
(1, 1, 'Monday', '14:00:00', '18:00:00'),
(1, 1, 'Thursday', '14:00:00', '18:00:00'),
(1, 1, 'Tuesday', '14:00:00', '18:00:00'),
(1, 1, 'Wednesday', '14:00:00', '18:00:00');