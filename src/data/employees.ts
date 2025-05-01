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
        birthDate: '01-01-1995',
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
        birthDate: '31-12-1997',
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
        birthDate: '14-02-1990',
        phone: '5339876543',
        email: 'mehmet_demir@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Caddesi, No:45, Ankara',
        department: Department.FINANCE,
        position: Position.ACCOUNTANT,
        salary: 55000,
        status: Status.RESIGNED,
        performanceRating: PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000004,
        name: 'Zeynep',
        surname: 'Kaya',
        gender: Gender.FEMALE,
        age: '32',
        birthDate: '19-07-1993',
        phone: '5345678901',
        email: 'zeynep_kaya@gmail.com',
        address: 'Beşiktaş Mahallesi, Barbaros Bulvarı, No:67, İstanbul',
        department: Department.MARKETING,
        position: Position.MARKETING_SPECIALIST,
        salary: 48000,
        status: Status.ON_LEAVE,
        performanceRating: PerformanceRating.GOOD,
    },
    {
        id: 10000000005,
        name: 'Ali',
        surname: 'Yıldız',
        gender: Gender.MALE,
        age: '40',
        birthDate: '28-02-1985',
        phone: '5352345678',
        email: 'ali_yildiz@gmail.com',
        address: 'Alsancak Mahallesi, Cumhuriyet Bulvarı, No:89, İzmir',
        department: Department.SALES,
        position: Position.SALES_REPRESENTATIVE,
        salary: 52000,
        status: Status.TERMINATED,
        performanceRating: PerformanceRating.AVERAGE,
    },
    {
        id: 10000000006,
        name: 'Fatma',
        surname: 'Öztürk',
        gender: Gender.FEMALE,
        age: '27',
        birthDate: '29-02-1998',
        phone: '5367890123',
        email: 'fatma_ozturk@gmail.com',
        address: 'Kadıköy Mahallesi, Bağdat Caddesi, No:34, İstanbul',
        department: Department.OPERATIONS,
        position: Position.TEAM_LEAD,
        salary: 65000,
        status: Status.TERMINATED,
        performanceRating: PerformanceRating.EXCELLENT,
    },
    {
        id: 10000000007,
        name: 'Mustafa',
        surname: 'Aydın',
        gender: Gender.MALE,
        age: '45',
        birthDate: '06-07-1980',
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
        birthDate: '14-10-1992',
        phone: '5389012345',
        email: 'selin_celik@gmail.com',
        address: 'Alsancak Mahallesi, Cumhuriyet Caddesi, No:78, İzmir',
        department: Department.CUSTOMER_SERVICE,
        position: Position.TEAM_LEAD,
        salary: 58000,
        status: Status.TERMINATED,
        performanceRating: PerformanceRating.GOOD,
    },
    {
        id: 10000000009,
        name: 'Burak',
        surname: 'Şahin',
        gender: Gender.MALE,
        age: '29',
        birthDate: '10-10-1996',
        phone: '5390123456',
        email: 'burak_sahin@gmail.com',
        address: 'Beşiktaş Mahallesi, Barbaros Bulvarı, No:90, İstanbul',
        department: Department.IT,
        position: Position.JUNIOR_DEVELOPER,
        salary: 40000,
        status: Status.ON_LEAVE,
        performanceRating: PerformanceRating.GOOD,
    },
    {
        id: 10000000010,
        name: 'Deniz',
        surname: 'Yılmaz',
        gender: Gender.FEMALE,
        age: '31',
        birthDate: '13-12-1994',
        phone: '5301234567',
        email: 'deniz_yilmaz@gmail.com',
        address: 'Çankaya Mahallesi, Atatürk Caddesi, No:12, Ankara',
        department: Department.HR,
        position: Position.HR_SPECIALIST,
        salary: 47000,
        status: Status.TERMINATED,
        performanceRating: PerformanceRating.GOOD,
    }
];

const generateRandomBirthDate = (): { randomBirthDate: string; randomAge: string } => {
    const day = Math.floor(Math.random() * 28) + 1;
    const month = Math.floor(Math.random() * 12) + 1;
    const year = Math.floor(Math.random() * (2008 - 1967 + 1)) + 1967;

    // Yaş hesapla
    const today = new Date();
    let age = today.getFullYear() - year;
    if (
        month > today.getMonth() + 1 ||
        (month === today.getMonth() + 1 && day > today.getDate())
    ) {
        age--; // Doğum günü henüz kutlanmadıysa yaş bir küçülür
    }

    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
    const formattedBirthDate = `${formattedDay}-${formattedMonth}-${year}`;

    return { randomBirthDate: formattedBirthDate, randomAge: age.toString() };
};

// Rastgele veri oluşturma fonksiyonu
// function generateRandomEmployee(id: number): EmployeeType {
//     const names = ['Ahmet', 'Mehmet', 'Ali', 'Veli', 'Ayşe', 'Fatma', 'Zeynep', 'Selin', 'Deniz', 'Burak'];
//     const surnames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Öztürk', 'Aydın', 'Arslan', 'Kılıç'];
//     const departments = Object.values(Department);
//     const positions = Object.values(Position);
//     const performanceRatings = Object.values(PerformanceRating);
//     const statuses = Object.values(Status);

//     const randomName = names[Math.floor(Math.random() * names.length)];
//     const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
//     const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
//     const randomPosition = positions[Math.floor(Math.random() * positions.length)];
//     const randomPerformance = performanceRatings[Math.floor(Math.random() * performanceRatings.length)];
//     const randomGender = Math.random() > 0.5 ? Gender.MALE : Gender.FEMALE;
//     const randomSalary = Math.floor(Math.random() * 50000) + 30000;
//     const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

//     const { randomBirthDate, randomAge } = generateRandomBirthDate();

//     return {
//         id,
//         name: randomName,
//         surname: randomSurname,
//         gender: randomGender,
//         age: randomAge,
//         birthDate: randomBirthDate,
//         phone: `5${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`,
//         email: `${randomName.toLowerCase()}_${randomSurname.toLowerCase()}@gmail.com`,
//         address: 'Rastgele Adres',
//         department: randomDepartment,
//         position: randomPosition,
//         salary: randomSalary,
//         status: randomStatus,
//         performanceRating: randomPerformance,
//     };
// }

function generateRandomEmployee(id: number): EmployeeType {
    const maleNames = ['Ahmet', 'Mehmet', 'Ali', 'Veli', 'Burak', 'Mustafa', 'Kemal', 'Onur', 'Emre', 'Hasan', 'Murat', 'Furkan', 'Can', 'Serkan'];
    const femaleNames = ['Ayşe', 'Fatma', 'Zeynep', 'Selin', 'Deniz', 'Esra', 'Büşra', 'Elif', 'Merve', 'Seda', 'Ece', 'Nehir', 'İlayda', 'Şeyma'];
    const surnames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Öztürk', 'Aydın', 'Arslan', 'Kılıç', 'Çakır', 'Koç', 'Avcı', 'Doğan', 'Polat', 'Eren'];

    const departments = Object.values(Department);
    const positions = Object.values(Position);
    const performanceRatings = Object.values(PerformanceRating);
    const statuses = Object.values(Status);

    const isMale = Math.random() > 0.5;
    const randomName = isMale
        ? maleNames[Math.floor(Math.random() * maleNames.length)]
        : femaleNames[Math.floor(Math.random() * femaleNames.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    const randomPerformance = performanceRatings[Math.floor(Math.random() * performanceRatings.length)];
    const randomSalary = Math.floor(Math.random() * 50000) + 30000;
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const { randomBirthDate, randomAge } = generateRandomBirthDate();

    return {
        id,
        name: randomName,
        surname: randomSurname,
        gender: isMale ? Gender.MALE : Gender.FEMALE,
        age: randomAge,
        birthDate: randomBirthDate,
        phone: `5${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`,
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
const randomEmployees: EmployeeType[] = Array.from({ length: 440 }, (_, index) =>
    generateRandomEmployee(10000000011 + index)
);

// Tüm kayıtları birleştir
export const employeeRows: EmployeeType[] = [...baseEmployees, ...randomEmployees]; 