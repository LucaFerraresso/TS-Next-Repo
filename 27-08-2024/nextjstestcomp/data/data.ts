//definisco la struttura con un interfaccia, questo e' il mio item
export interface Item {
  id?: number;
  name?: string;
  cognome?: string;
  role?: string;
  image?: string;
  description?: string;
  personalinfo?: Ipersonalinfo;
  languages?: Ilanguages;
}

//la struttura della chave personalinfo e' definita come n oggetto con due chiavi {email, dataNascita}
export interface Ipersonalinfo {
  email: string;
  dataNascita: string;
}

//la struttura della chiave languages e' definito come un array di stringhe
export interface Ilanguages {
  languages: string[];
}

//itams lo definisco a sua volta come un array di item
//utilizzero' questo array per generare le card a dom
export const Items: Item[] = [
  {
    name: "Luca",
    role: "Junior Developer",
    id: 1,
    image:
      "https://wallpapers.com/images/thumbnail/squidward-pouring-coffee-random-pfp-7iq9m00bd4r6s0rz.webp",
    description: "lorem ipsum dolor sit amet",

    personalinfo: {
      dataNascita: "07/12/1996",
      email: "XXXXXXXXXXXXXXX",
    },
    languages: {
      languages: ["html", "css", "js", "ts"],
    },
  },
  {
    name: "Gigio",
    role: "Senior Developer",
    id: 2,
    description: "lorem ipsum dolor sit amet",
    image:
      "https://wallpapers.com/images/thumbnail/confused-patrick-random-pfp-x63wp9vs43cem64s.webp",

    personalinfo: {
      dataNascita: "12/04/1985",
      email: "XXXXXXXXXXXXXXX",
    },
    languages: {
      languages: ["html", "css", "js", "ts"],
    },
  },
  {
    name: "Pippo",
    role: "Project Manager",
    id: 3,
    description: "lorem ipsum dolor sit amet",
    image:
      "https://wallpapers.com/images/thumbnail/random-pfp-of-fish-with-sunglasses-2wqsn5a94wc04vpv.webp",

    personalinfo: {
      dataNascita: "03/04/1980",
      email: "XXXXXXXXXXXXXXX",
    },
    languages: {
      languages: ["html", "css", "js", "ts"],
    },
  },
];
