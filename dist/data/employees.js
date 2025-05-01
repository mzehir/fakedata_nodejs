"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRows = void 0;
const department_1 = require("../enums/department");
const gender_1 = require("../enums/gender");
const performanceRating_1 = require("../enums/performanceRating");
const position_1 = require("../enums/position");
const status_1 = require("../enums/status");
// Mevcut kayıtlar
const baseEmployees = [
    {
        id: 10000000001,
        name: 'Kemal',
        surname: 'Sarı',
        gender: gender_1.Gender.MALE,
        age: '30',
        birthDate: '25.03.1992',
        phone: '5419525921',
        email: 'kemal_sari@gmail.com',
        address: 'Ağalar Mahallesi, Cumhuriyet Caddesi, No:79, Kocaali/SAKARYA',
        department: department_1.Department.IT,
        position: position_1.Position.SENIOR_DEVELOPER,
        salary: 60000.45,
        status: status_1.Status.ACTIVE,
        performanceRating: performanceRating_1.PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000002,
        name: 'Ayşe',
        surname: 'Yılmaz',
        gender: gender_1.Gender.FEMALE,
        age: '28',
        birthDate: '15.06.1994',
        phone: '5321234567',
        email: 'ayse_yilmaz@gmail.com',
        address: 'Kadıköy Mahallesi, İstiklal Caddesi, No:123, İstanbul',
        department: department_1.Department.HR,
        position: position_1.Position.HR_SPECIALIST,
        salary: 45000,
        status: status_1.Status.ACTIVE,
        performanceRating: performanceRating_1.PerformanceRating.GOOD,
    },
    {
        id: 10000000003,
        name: 'Mehmet',
        surname: 'Demir',
        gender: gender_1.Gender.MALE,
        age: '35',
        birthDate: '10.01.1989',
        phone: '5339876543',
        email: 'mehmet_demir@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Caddesi, No:45, Ankara',
        department: department_1.Department.FINANCE,
        position: position_1.Position.ACCOUNTANT,
        salary: 55000,
        status: status_1.Status.RESIGNED,
        performanceRating: performanceRating_1.PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000004,
        name: 'Zeynep',
        surname: 'Kaya',
        gender: gender_1.Gender.FEMALE,
        age: '32',
        birthDate: '20.05.1991',
        phone: '5345678901',
        email: 'zeynep_kaya@gmail.com',
        address: 'Beşiktaş Mahallesi, Barbaros Bulvarı, No:67, İstanbul',
        department: department_1.Department.MARKETING,
        position: position_1.Position.MARKETING_SPECIALIST,
        salary: 48000,
        status: status_1.Status.ON_LEAVE,
        performanceRating: performanceRating_1.PerformanceRating.GOOD,
    },
    {
        id: 10000000005,
        name: 'Ali',
        surname: 'Yıldız',
        gender: gender_1.Gender.MALE,
        age: '40',
        birthDate: '05.11.1983',
        phone: '5352345678',
        email: 'ali_yildiz@gmail.com',
        address: 'Alsancak Mahallesi, Cumhuriyet Bulvarı, No:89, İzmir',
        department: department_1.Department.SALES,
        position: position_1.Position.SALES_REPRESENTATIVE,
        salary: 52000,
        status: status_1.Status.TERMINATED,
        performanceRating: performanceRating_1.PerformanceRating.AVERAGE,
    },
    {
        id: 10000000006,
        name: 'Fatma',
        surname: 'Öztürk',
        gender: gender_1.Gender.FEMALE,
        age: '27',
        birthDate: '15.08.1996',
        phone: '5367890123',
        email: 'fatma_ozturk@gmail.com',
        address: 'Kadıköy Mahallesi, Bağdat Caddesi, No:34, İstanbul',
        department: department_1.Department.OPERATIONS,
        position: position_1.Position.TEAM_LEAD,
        salary: 65000,
        status: status_1.Status.TERMINATED,
        performanceRating: performanceRating_1.PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000007,
        name: 'Mustafa',
        surname: 'Aydın',
        gender: gender_1.Gender.MALE,
        age: '45',
        birthDate: '20.03.1978',
        phone: '5378901234',
        email: 'mustafa_aydin@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Bulvarı, No:56, Ankara',
        department: department_1.Department.IT,
        position: position_1.Position.MANAGER,
        salary: 75000,
        status: status_1.Status.ACTIVE,
        performanceRating: performanceRating_1.PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000008,
        name: 'Selin',
        surname: 'Çelik',
        gender: gender_1.Gender.FEMALE,
        age: '33',
        birthDate: '10.12.1990',
        phone: '5389012345',
        email: 'selin_celik@gmail.com',
        address: 'Alsancak Mahallesi, Cumhuriyet Caddesi, No:78, İzmir',
        department: department_1.Department.CUSTOMER_SERVICE,
        position: position_1.Position.TEAM_LEAD,
        salary: 58000,
        status: status_1.Status.TERMINATED,
        performanceRating: performanceRating_1.PerformanceRating.GOOD,
    },
    {
        id: 10000000009,
        name: 'Burak',
        surname: 'Şahin',
        gender: gender_1.Gender.MALE,
        age: '29',
        birthDate: '25.07.1994',
        phone: '5390123456',
        email: 'burak_sahin@gmail.com',
        address: 'Beşiktaş Mahallesi, Barbaros Bulvarı, No:90, İstanbul',
        department: department_1.Department.IT,
        position: position_1.Position.JUNIOR_DEVELOPER,
        salary: 40000,
        status: status_1.Status.ON_LEAVE,
        performanceRating: performanceRating_1.PerformanceRating.GOOD,
    },
    {
        id: 10000000010,
        name: 'Deniz',
        surname: 'Yılmaz',
        gender: gender_1.Gender.FEMALE,
        age: '31',
        birthDate: '15.04.1992',
        phone: '5301234567',
        email: 'deniz_yilmaz@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Caddesi, No:12, Ankara',
        department: department_1.Department.HR,
        position: position_1.Position.HR_SPECIALIST,
        salary: 47000,
        status: status_1.Status.TERMINATED,
        performanceRating: performanceRating_1.PerformanceRating.GOOD,
    }
];
// Rastgele veri oluşturma fonksiyonu
function generateRandomEmployee(id) {
    const names = ['Ahmet', 'Mehmet', 'Ali', 'Veli', 'Ayşe', 'Fatma', 'Zeynep', 'Selin', 'Deniz', 'Burak'];
    const surnames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Öztürk', 'Aydın', 'Arslan', 'Kılıç'];
    const departments = Object.values(department_1.Department);
    const positions = Object.values(position_1.Position);
    const performanceRatings = Object.values(performanceRating_1.PerformanceRating);
    const statuses = Object.values(status_1.Status);
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    const randomPerformance = performanceRatings[Math.floor(Math.random() * performanceRatings.length)];
    const randomGender = Math.random() > 0.5 ? gender_1.Gender.MALE : gender_1.Gender.FEMALE;
    const randomAge = Math.floor(Math.random() * 30) + 20;
    const randomSalary = Math.floor(Math.random() * 50000) + 30000;
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    return {
        id,
        name: randomName,
        surname: randomSurname,
        gender: randomGender,
        age: randomAge.toString(),
        birthDate: `${Math.floor(Math.random() * 28) + 1}.${Math.floor(Math.random() * 12) + 1}.${2023 - randomAge}`,
        phone: `5${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`,
        email: `${randomName.toLowerCase()}_${randomSurname.toLowerCase()}@gmail.com`,
        address: 'Rastgele Adres',
        department: randomDepartment,
        position: randomPosition,
        salary: randomSalary,
        status: randomStatus,
        performanceRating: randomPerformance,
    };
}
// 440 rastgele kayıt oluştur
const randomEmployees = Array.from({ length: 440 }, (_, index) => generateRandomEmployee(10000000011 + index));
// Tüm kayıtları birleştir
exports.employeeRows = [...baseEmployees, ...randomEmployees];
