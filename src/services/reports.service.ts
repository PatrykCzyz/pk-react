import Report from "../interfaces/Report";

class ReportsService {
  getAll(): Report[] {
    return [
      {
        orderBy: "Jan Kowalski",
        orderDate: new Date(Date.now()),
        orderNumber: "737/2021/GDY",
        realizationDate: new Date(Date.now()),
        samples: ["kaszanka", 'salceson'],
      },
      {
        orderBy: "Jan Kowalski",
        orderDate: new Date(Date.now()),
        orderNumber: "737/2021/GDY",
        realizationDate: new Date(Date.now()),
        samples: ["kaszanka"],
      },
      {
        orderBy: "Jan Kowalski",
        orderDate: new Date(Date.now()),
        orderNumber: "737/2021/GDY",
        realizationDate: new Date(Date.now()),
        samples: ["kaszanka"],
      },
      {
        orderBy: "Jan Kowalski",
        orderDate: new Date(Date.now()),
        orderNumber: "737/2021/GDY",
        realizationDate: new Date(Date.now()),
        samples: ["kaszanka"],
      },
      {
        orderBy: "Jan Kowalski",
        orderDate: new Date(Date.now()),
        orderNumber: "737/2021/GDY",
        realizationDate: new Date(Date.now()),
        samples: ["kaszanka"],
      },
    ];
  }
}

export default new ReportsService();
