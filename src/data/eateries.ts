export interface EateryDetail {
  imageUrl: string;
  descriptionKey: string;
}

export interface Eatery {
  id: string;
  name: string;
  logoUrl: string;
  phone: string;
  details: EateryDetail[];
}

export const eateries: Eatery[] = [
  {
    id: "kfc", name: "KFC", logoUrl: "/brands/KFC edited.webp", phone: "+20-123-456-7890",
    details: [
      { imageUrl: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg", descriptionKey: "eateries.kfc.detail1" },
      { imageUrl: "https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg", descriptionKey: "eateries.kfc.detail2" },
      { imageUrl: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg", descriptionKey: "eateries.kfc.detail3" },
      { imageUrl: "https://images.pexels.com/photos/6943245/pexels-photo-6943245.jpeg", descriptionKey: "eateries.kfc.detail4" }
    ]
  },
  {
    id: "pizza-hut", name: "Pizza Hut", logoUrl: "/brands/pizza hut edited.webp", phone: "+20-123-456-7891",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg", descriptionKey: "eateries.pizza_hut.detail1" },
      { imageUrl: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg", descriptionKey: "eateries.pizza_hut.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg", descriptionKey: "eateries.pizza_hut.detail3" },
      { imageUrl: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg", descriptionKey: "eateries.pizza_hut.detail4" }
    ]
  },
  {
    id: "hardees", name: "Hardees", logoUrl: "/brands/hardees edited.webp", phone: "+20-123-456-7892",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg", descriptionKey: "eateries.hardees.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg", descriptionKey: "eateries.hardees.detail2" },
      { imageUrl: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg", descriptionKey: "eateries.hardees.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg", descriptionKey: "eateries.hardees.detail4" }
    ]
  },
  {
    id: "feterty", name: "Ftirty", logoUrl: "/brands/feterty edited.webp", phone: "+20-123-456-7893",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg", descriptionKey: "eateries.feterty.detail1" },
      { imageUrl: "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg", descriptionKey: "eateries.feterty.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1251179/pexels-photo-1251179.jpeg", descriptionKey: "eateries.feterty.detail3" },
      { imageUrl: "https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg", descriptionKey: "eateries.feterty.detail4" }
    ]
  },
  {
    id: "hans", name: "Hans", logoUrl: "/brands/hans edited.webp", phone: "+20-123-456-7894",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg", descriptionKey: "eateries.hans.detail1" },
      { imageUrl: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg", descriptionKey: "eateries.hans.detail2" },
      { imageUrl: "https://images.pexels.com/photos/5920744/pexels-photo-5920744.jpeg", descriptionKey: "eateries.hans.detail3" },
      { imageUrl: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg", descriptionKey: "eateries.hans.detail4" }
    ]
  },
  {
    id: "blaban", name: "Blaban", logoUrl: "/brands/blaban edited.webp", phone: "+20-123-456-7895",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg", descriptionKey: "eateries.blaban.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg", descriptionKey: "eateries.blaban.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg", descriptionKey: "eateries.blaban.detail3" },
      { imageUrl: "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg", descriptionKey: "eateries.blaban.detail4" }
    ]
  },
  {
    id: "ammar-auto", name: "Ammar Auto", logoUrl: "/brands/ammar-auto.webp", phone: "+20-123-456-7896",
    details: [
      { imageUrl: "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg", descriptionKey: "eateries.ammar-auto.detail1" },
      { imageUrl: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg", descriptionKey: "eateries.ammar-auto.detail2" },
      { imageUrl: "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg", descriptionKey: "eateries.ammar-auto.detail3" },
      { imageUrl: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg", descriptionKey: "eateries.ammar-auto.detail4" }
    ]
  },
  {
    id: "b-tech", name: "B-Tech", logoUrl: "/brands/b-tech.webp", phone: "+20-123-456-7897",
    details: [
      { imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg", descriptionKey: "eateries.b-tech.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg", descriptionKey: "eateries.b-tech.detail2" },
      { imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg", descriptionKey: "eateries.b-tech.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg", descriptionKey: "eateries.b-tech.detail4" }
    ]
  },
  {
    id: "balbaa-village", name: "Balbaa Village", logoUrl: "/brands/balbaa-village.webp", phone: "+20-123-456-7898",
    details: [
      { imageUrl: "https://images.pexels.com/photos/5638749/pexels-photo-5638749.jpeg", descriptionKey: "eateries.balbaa-village.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg", descriptionKey: "eateries.balbaa-village.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg", descriptionKey: "eateries.balbaa-village.detail3" },
      { imageUrl: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg", descriptionKey: "eateries.balbaa-village.detail4" }
    ]
  },
  {
    id: "bright-store", name: "Bright Store", logoUrl: "/brands/bright-store.webp", phone: "+20-123-456-7899",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg", descriptionKey: "eateries.bright-store.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg", descriptionKey: "eateries.bright-store.detail2" },
      { imageUrl: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg", descriptionKey: "eateries.bright-store.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", descriptionKey: "eateries.bright-store.detail4" }
    ]
  },
  {
    id: "dream-2000", name: "Dream 2000", logoUrl: "/brands/dream-2000.webp", phone: "+20-123-456-7900",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", descriptionKey: "eateries.dream-2000.detail1" },
      { imageUrl: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg", descriptionKey: "eateries.dream-2000.detail2" },
      { imageUrl: "https://images.pexels.com/photos/380283/pexels-photo-380283.jpeg", descriptionKey: "eateries.dream-2000.detail3" },
      { imageUrl: "https://images.pexels.com/photos/271711/pexels-photo-271711.jpeg", descriptionKey: "eateries.dream-2000.detail4" }
    ]
  },
  {
    id: "fathalla-market", name: "Fathalla Market", logoUrl: "/brands/fathalla-market.webp", phone: "+20-123-456-7901",
    details: [
      { imageUrl: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg", descriptionKey: "eateries.fathalla-market.detail1" },
      { imageUrl: "https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg", descriptionKey: "eateries.fathalla-market.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg", descriptionKey: "eateries.fathalla-market.detail3" },
      { imageUrl: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg", descriptionKey: "eateries.fathalla-market.detail4" }
    ]
  },
  {
    id: "donia-el-gambary", name: "Donia El Gambary", logoUrl: "/brands/donia-el-gambary.webp", phone: "+20-123-456-7902",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg", descriptionKey: "eateries.donia-el-gambary.detail1" },
      { imageUrl: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg", descriptionKey: "eateries.donia-el-gambary.detail2" },
      { imageUrl: "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg", descriptionKey: "eateries.donia-el-gambary.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg", descriptionKey: "eateries.donia-el-gambary.detail4" }
    ]
  },
  {
    id: "hamed-el-basiony", name: "Hamed El Basiony", logoUrl: "/brands/hamed-el-basiony.webp", phone: "+20-123-456-7903",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg", descriptionKey: "eateries.hamed-el-basiony.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg", descriptionKey: "eateries.hamed-el-basiony.detail2" },
      { imageUrl: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg", descriptionKey: "eateries.hamed-el-basiony.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", descriptionKey: "eateries.hamed-el-basiony.detail4" }
    ]
  },
  {
    id: "khatab", name: "Khatab", logoUrl: "/brands/khatab.webp", phone: "+20-123-456-7904",
    details: [
      { imageUrl: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg", descriptionKey: "eateries.khatab.detail1" },
      { imageUrl: "https://images.pexels.com/photos/4226804/pexels-photo-4226804.jpeg", descriptionKey: "eateries.khatab.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg", descriptionKey: "eateries.khatab.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg", descriptionKey: "eateries.khatab.detail4" }
    ]
  },
  {
    id: "ragab-perfumes", name: "Ragab Perfumes", logoUrl: "/brands/ragab-perfumes.webp", phone: "+20-123-456-7905",
    details: [
      { imageUrl: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg", descriptionKey: "eateries.ragab-perfumes.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg", descriptionKey: "eateries.ragab-perfumes.detail2" },
      { imageUrl: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg", descriptionKey: "eateries.ragab-perfumes.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1557986/pexels-photo-1557986.jpeg", descriptionKey: "eateries.ragab-perfumes.detail4" }
    ]
  },
  {
    id: "raya", name: "Raya", logoUrl: "/brands/raya.webp", phone: "+20-123-456-7906",
    details: [
      { imageUrl: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg", descriptionKey: "eateries.raya.detail1" },
      { imageUrl: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg", descriptionKey: "eateries.raya.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg", descriptionKey: "eateries.raya.detail3" },
      { imageUrl: "https://images.pexels.com/photos/7679876/pexels-photo-7679876.jpeg", descriptionKey: "eateries.raya.detail4" }
    ]
  },
  {
    id: "smart-furniture", name: "Smart Furniture", logoUrl: "/brands/smart-furniture.webp", phone: "+20-123-456-7907",
    details: [
      { imageUrl: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", descriptionKey: "eateries.smart-furniture.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", descriptionKey: "eateries.smart-furniture.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg", descriptionKey: "eateries.smart-furniture.detail3" },
      { imageUrl: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg", descriptionKey: "eateries.smart-furniture.detail4" }
    ]
  },
  {
    id: "el-tahrir", name: "El Tahrir", logoUrl: "/brands/el-tahrir.webp", phone: "+20-123-456-7908",
    details: [
      { imageUrl: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg", descriptionKey: "eateries.el-tahrir.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", descriptionKey: "eateries.el-tahrir.detail2" },
      { imageUrl: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg", descriptionKey: "eateries.el-tahrir.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg", descriptionKey: "eateries.el-tahrir.detail4" }
    ]
  },
  {
    id: "zizo-&-lavish", name: "Zizo & Lavish", logoUrl: "/brands/zizo-&-lavish.webp", phone: "+20-123-456-7909",
    details: [
      { imageUrl: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg", descriptionKey: "eateries.zizo-&-lavish.detail1" },
      { imageUrl: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg", descriptionKey: "eateries.zizo-&-lavish.detail2" },
      { imageUrl: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg", descriptionKey: "eateries.zizo-&-lavish.detail3" },
      { imageUrl: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg", descriptionKey: "eateries.zizo-&-lavish.detail4" }
    ]
  }
];
