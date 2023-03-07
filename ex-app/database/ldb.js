import { Low, LowSync } from 'lowdb';
import { JSONFile, JSONFileSync } from 'lowdb/node';

// baza podatkov meritev
const meritvePath = "/home/cena/microservice-demo/ex-app/database/meritve.json";
export const meritvedb = new LowSync(new JSONFileSync(meritvePath));

// baza podatkov krmilnika
const krmilnikPath = "/home/cena/microservice-demo/ex-app/database/krmilnik.json";
export const krmilnikdb = new LowSync(new JSONFileSync(krmilnikPath));
