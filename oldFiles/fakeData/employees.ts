import { Department } from "../enums/department";
import { Gender } from "../enums/gender";
import { PerformanceRating } from "../enums/performanceRating";
import { Position } from "../enums/position";
import { Status } from "../enums/status";
import { EmployeeType } from "./employeeType";

// Mevcut kayıtlar
const baseEmployees: EmployeeType[] = [
    {
        id: 10000000001,
        name: 'Kemal',
        surname: 'Sarı',
        gender: Gender.MALE,
        age: '30',
        birthDate: '25.03.1992',
        phone: '5419525921',
        email: 'kemal_sari@gmail.com',
        address: 'Ağalar Mahallesi, Cumhuriyet Caddesi, No:79, Kocaali/SAKARYA',
        department: Department.IT,
        position: Position.SENIOR_DEVELOPER,
        salary: 60000.45,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000002,
        name: 'Ayşe',
        surname: 'Yılmaz',
        gender: Gender.FEMALE,
        age: '28',
        birthDate: '15.06.1994',
        phone: '5321234567',
        email: 'ayse_yilmaz@gmail.com',
        address: 'Kadıköy Mahallesi, İstiklal Caddesi, No:123, İstanbul',
        department: Department.HR,
        position: Position.HR_SPECIALIST,
        salary: 45000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.GOOD,
    },
    {
        id: 10000000003,
        name: 'Mehmet',
        surname: 'Demir',
        gender: Gender.MALE,
        age: '35',
        birthDate: '10.01.1989',
        phone: '5339876543',
        email: 'mehmet_demir@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Caddesi, No:45, Ankara',
        department: Department.FINANCE,
        position: Position.ACCOUNTANT,
        salary: 55000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000004,
        name: 'Zeynep',
        surname: 'Kaya',
        gender: Gender.FEMALE,
        age: '32',
        birthDate: '20.05.1991',
        phone: '5345678901',
        email: 'zeynep_kaya@gmail.com',
        address: 'Beşiktaş Mahallesi, Barbaros Bulvarı, No:67, İstanbul',
        department: Department.MARKETING,
        position: Position.MARKETING_SPECIALIST,
        salary: 48000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.GOOD,
    },
    {
        id: 10000000005,
        name: 'Ali',
        surname: 'Yıldız',
        gender: Gender.MALE,
        age: '40',
        birthDate: '05.11.1983',
        phone: '5352345678',
        email: 'ali_yildiz@gmail.com',
        address: 'Alsancak Mahallesi, Cumhuriyet Bulvarı, No:89, İzmir',
        department: Department.SALES,
        position: Position.SALES_REPRESENTATIVE,
        salary: 52000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.AVERAGE,
    },
    {
        id: 10000000006,
        name: 'Fatma',
        surname: 'Öztürk',
        gender: Gender.FEMALE,
        age: '27',
        birthDate: '15.08.1996',
        phone: '5367890123',
        email: 'fatma_ozturk@gmail.com',
        address: 'Kadıköy Mahallesi, Bağdat Caddesi, No:34, İstanbul',
        department: Department.OPERATIONS,
        position: Position.TEAM_LEAD,
        salary: 65000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000007,
        name: 'Mustafa',
        surname: 'Aydın',
        gender: Gender.MALE,
        age: '45',
        birthDate: '20.03.1978',
        phone: '5378901234',
        email: 'mustafa_aydin@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Bulvarı, No:56, Ankara',
        department: Department.IT,
        position: Position.MANAGER,
        salary: 75000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000008,
        name: 'Selin',
        surname: 'Çelik',
        gender: Gender.FEMALE,
        age: '33',
        birthDate: '10.12.1990',
        phone: '5389012345',
        email: 'selin_celik@gmail.com',
        address: 'Alsancak Mahallesi, Cumhuriyet Caddesi, No:78, İzmir',
        department: Department.CUSTOMER_SERVICE,
        position: Position.TEAM_LEAD,
        salary: 58000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.GOOD,
    },
    {
        id: 10000000009,
        name: 'Burak',
        surname: 'Şahin',
        gender: Gender.MALE,
        age: '29',
        birthDate: '25.07.1994',
        phone: '5390123456',
        email: 'burak_sahin@gmail.com',
        address: 'Beşiktaş Mahallesi, Barbaros Bulvarı, No:90, İstanbul',
        department: Department.IT,
        position: Position.JUNIOR_DEVELOPER,
        salary: 40000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.GOOD,
    },
    {
        id: 10000000010,
        name: 'Deniz',
        surname: 'Yılmaz',
        gender: Gender.FEMALE,
        age: '31',
        birthDate: '15.04.1992',
        phone: '5301234567',
        email: 'deniz_yilmaz@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Caddesi, No:12, Ankara',
        department: Department.HR,
        position: Position.HR_SPECIALIST,
        salary: 47000,
        status: Status.ACTIVE,
        performanceRating: PerformanceRating.GOOD,
    }
];

// Rastgele veri oluşturma fonksiyonu
function generateRandomEmployee(id: number): EmployeeType {
    const names = ['Ahmet', 'Mehmet', 'Ali', 'Veli', 'Ayşe', 'Fatma', 'Zeynep', 'Selin', 'Deniz', 'Burak'];
    const surnames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Öztürk', 'Aydın', 'Arslan', 'Kılıç'];
    const departments = Object.values(Department);
    const positions = Object.values(Position);
    const performanceRatings = Object.values(PerformanceRating);

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    const randomPerformance = performanceRatings[Math.floor(Math.random() * performanceRatings.length)];
    const randomGender = Math.random() > 0.5 ? Gender.MALE : Gender.FEMALE;
    const randomAge = Math.floor(Math.random() * 30) + 20;
    const randomSalary = Math.floor(Math.random() * 50000) + 30000;

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
        status: Status.ACTIVE,
        performanceRating: randomPerformance,
    };
}

// 440 rastgele kayıt oluştur
const randomEmployees: EmployeeType[] = Array.from({ length: 440 }, (_, index) =>
    generateRandomEmployee(10000000011 + index)
);

// Tüm kayıtları birleştir
export const employeeRows: EmployeeType[] = [...baseEmployees, ...randomEmployees]; 