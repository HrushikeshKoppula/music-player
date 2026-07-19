const songs = [
    {
        title: "Song One",
        url: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin"
    },
    {
        title: "Song Two",
        url: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin"
    },
    {
        title: "Song Three",
        url: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin"
    }
];


const wallpapers = [
    "https://cdna.artstation.com/p/assets/images/images/097/075/314/large/wlop-11se.webp?1773122094",
    "https://cdna.artstation.com/p/assets/images/images/097/075/316/large/wlop-10se.webp?1773122082",
    "https://cdna.artstation.com/p/assets/images/images/097/075/318/large/wlop-9se.webp?1773122086",
    "https://cdnb.artstation.com/p/assets/images/images/095/744/005/large/wlop-7se.webp?1769418993",
    "https://cdnb.artstation.com/p/assets/images/images/095/743/995/large/wlop-5se.webp?1769418953",
    "https://cdna.artstation.com/p/assets/images/images/095/404/222/large/wlop-4palese.webp?1768474193",
    "https://cdna.artstation.com/p/assets/images/images/094/088/342/large/wlop-3se.webp?1764427657",
    "https://cdnb.artstation.com/p/assets/images/images/093/455/453/large/wlop-2se.webp?1762571191",
    "https://cdna.artstation.com/p/assets/images/images/093/148/356/large/wlop-1se.webp?1761727856",
    "https://cdnb.artstation.com/p/assets/images/images/089/885/543/large/wlop-18see.jpg?1752226300",
    "https://cdna.artstation.com/p/assets/images/images/088/755/922/large/wlop-17se.jpg?1749094448",
    "https://cdnb.artstation.com/p/assets/images/images/087/625/737/large/wlop-16se.jpg?1746285346",
    "https://cdna.artstation.com/p/assets/images/images/085/546/042/large/wlop-7se.jpg?1741066346",
    "https://cdna.artstation.com/p/assets/images/images/085/546/044/large/wlop-10se.jpg?1741066278",
    "https://cdnb.artstation.com/p/assets/images/images/085/234/103/large/wlop-8se.jpg?1740318341",
    "https://cdnb.artstation.com/p/assets/images/images/084/137/165/large/wlop-6se.jpg?1737630099",
    "https://cdna.artstation.com/p/assets/images/images/084/137/128/large/wlop-4se.jpg?1737630013",
    "https://cdna.artstation.com/p/assets/images/images/082/071/286/large/wlop-1se.jpg?1732004139",
    "https://cdna.artstation.com/p/assets/images/images/080/308/162/large/wlop-5se.jpg?1727236298",
    "https://cdna.artstation.com/p/assets/images/images/080/308/160/large/wlop-4se.jpg?1727236294",
    "https://cdnb.artstation.com/p/assets/images/images/080/308/157/large/wlop-3se.jpg?1727236288",
    "https://cdnb.artstation.com/p/assets/images/images/080/308/155/large/wlop-1se.jpg?1727236279",
    "https://cdna.artstation.com/p/assets/images/images/080/308/156/large/wlop-2se.jpg?1727236283",
    "https://cdnb.artstation.com/p/assets/images/images/080/308/163/large/wlop-6se.jpg?1727236303",
    "https://cdna.artstation.com/p/assets/images/images/079/879/232/large/wlop-7se.jpg?1726062778",
    "https://cdna.artstation.com/p/assets/images/images/079/879/236/large/wlop-8se.jpg?1726062767",
    "https://cdnb.artstation.com/p/assets/images/images/077/911/955/large/wlop-4se.jpg?1720679230",
    "https://cdna.artstation.com/p/assets/images/images/077/911/944/large/wlop-1se.jpg?1720679219",
    "https://cdna.artstation.com/p/assets/images/images/077/911/948/large/wlop-2se.jpg?1720679222",
    "https://cdna.artstation.com/p/assets/images/images/077/911/954/large/wlop-3se.jpg?1720679226",
    "https://cdnb.artstation.com/p/assets/images/images/077/911/957/large/wlop-5se.jpg?1720679235",
    "https://cdnb.artstation.com/p/assets/images/images/078/770/937/large/wlop-6se.jpg?1723036692",
    "https://cdna.artstation.com/p/assets/images/images/078/770/940/large/wlop-9se.jpg?1723036697",
    "https://cdnb.artstation.com/p/assets/images/images/078/770/945/large/wlop-10se.jpg?1723036702",
    "https://cdnb.artstation.com/p/assets/images/images/078/770/947/large/wlop-11se.jpg?1723036707",
    "https://cdnb.artstation.com/p/assets/images/images/078/770/951/large/wlop-12se.jpg?1723036712",
    "https://cdnb.artstation.com/p/assets/images/images/078/771/119/large/wlop-13se.jpg?1723037015",
    "https://cdna.artstation.com/p/assets/images/images/077/097/020/large/wlop-6se.jpg?1718603887",
    "https://cdna.artstation.com/p/assets/images/images/077/097/022/large/wlop-6xse.jpg?1718603891",
    "https://cdna.artstation.com/p/assets/images/images/076/175/146/large/wlop-3se.jpg?1716363261",
    "https://cdnb.artstation.com/p/assets/images/images/075/961/095/large/wlop-2se.jpg?1715827739",
    "https://cdna.artstation.com/p/assets/images/images/075/350/704/large/wlop-42se.jpg?1714371984",
    "https://cdna.artstation.com/p/assets/images/images/075/350/712/large/wlop-45se.jpg?1714371970",
    "https://cdnb.artstation.com/p/assets/images/images/075/350/709/large/wlop-44se.jpg?1714371965",
    "https://cdna.artstation.com/p/assets/images/images/075/350/702/large/wlop-41se.jpg?1714371951",
    "https://cdna.artstation.com/p/assets/images/images/075/350/706/large/wlop-43se.jpg?1714371960",
    "https://cdnb.artstation.com/p/assets/images/images/074/144/801/large/wlop-31-se.jpg?1711364219",
    "https://cdnb.artstation.com/p/assets/images/images/074/144/805/large/wlop-31x-se.jpg?1711364209",
    "https://cdna.artstation.com/p/assets/images/images/073/895/042/large/wlop-30-se.jpg?1710756692",
    "https://cdnb.artstation.com/p/assets/images/images/074/144/825/large/wlop-30x-se.jpg?1711364265",
    "https://cdnb.artstation.com/p/assets/images/images/072/961/887/large/wlop-17-se.jpg?1708597625",
    "https://cdna.artstation.com/p/assets/images/images/072/961/892/large/wlop-18-se.jpg?1708597618",
    "https://cdna.artstation.com/p/assets/images/images/071/760/456/large/wlop-9se.jpg?1705895046",
    "https://cdna.artstation.com/p/assets/images/images/071/760/450/large/wlop-6se.jpg?1705895017",
    "https://cdnb.artstation.com/p/assets/images/images/071/760/451/large/wlop-7se.jpg?1705895021",
    "https://cdnb.artstation.com/p/assets/images/images/071/760/453/large/wlop-8se.jpg?1705895025",
    "https://cdna.artstation.com/p/assets/images/images/071/760/414/large/wlop-4se.jpg?1705894907",
    "https://cdna.artstation.com/p/assets/images/images/071/760/418/large/wlop-5se.jpg?1705894912",
    "https://cdna.artstation.com/p/assets/images/images/071/760/438/large/wlop-3se.jpg?1705894966",
    "https://cdnb.artstation.com/p/assets/images/images/069/526/461/large/wlop-1se.jpg?1700366590",
    "https://cdna.artstation.com/p/assets/images/images/069/526/470/large/wlop-7se.jpg?1700366612",
    "https://cdnb.artstation.com/p/assets/images/images/069/526/465/large/wlop-4se.jpg?1700366600",
    "https://cdnb.artstation.com/p/assets/images/images/069/526/469/large/wlop-6se.jpg?1700366608",
    "https://cdna.artstation.com/p/assets/images/images/069/526/474/large/wlop-9se.jpg?1700366620",
    "https://cdnb.artstation.com/p/assets/images/images/069/526/473/large/wlop-8se.jpg?1700366616",
    "https://cdna.artstation.com/p/assets/images/images/069/526/466/large/wlop-5se.jpg?1700366604",
    "https://cdna.artstation.com/p/assets/images/images/069/526/464/large/wlop-3se.jpg?1700366595",
    "https://cdnb.artstation.com/p/assets/images/images/068/573/381/large/wlop-1se.jpg?1698156406",
    "https://cdna.artstation.com/p/assets/images/images/067/815/708/large/wlop-49se.jpg?1696308830",
    "https://cdna.artstation.com/p/assets/images/images/067/113/348/large/wlop-35lse.jpg?1694578509",
    "https://cdna.artstation.com/p/assets/images/images/067/113/350/large/wlop-36se.jpg?1694578492",
    "https://cdnb.artstation.com/p/assets/images/images/067/113/347/large/wlop-35design.jpg?1694578482",
    "https://cdnb.artstation.com/p/assets/images/images/066/760/963/large/wlop-35se.jpg?1693714473",
    "https://cdnb.artstation.com/p/assets/images/images/066/000/955/large/wlop-25-1se.jpg?1691765242",
    "https://cdnb.artstation.com/p/assets/images/images/066/000/963/large/wlop-25-2se.jpg?1691765197",
    "https://cdnb.artstation.com/p/assets/images/images/065/717/385/large/wlop-24-3se.jpg?1691048039",
    "https://cdnb.artstation.com/p/assets/images/images/065/717/383/large/wlop-24-2se.jpg?1691048034",
    "https://cdnb.artstation.com/p/assets/images/images/065/717/381/large/wlop-24-1se.jpg?1691048029",
    "https://cdnb.artstation.com/p/assets/images/images/064/104/233/large/wlop-10se.jpg?1687145024",
    "https://cdna.artstation.com/p/assets/images/images/062/758/394/large/wlop-8se.jpg?1683875017",
    "https://cdna.artstation.com/p/assets/images/images/062/398/124/large/wlop-7se.jpg?1683043494",
    "https://cdna.artstation.com/p/assets/images/images/061/837/772/large/wlop-5se.jpg?1681755498",
    "https://cdnb.artstation.com/p/assets/images/images/061/837/775/large/wlop-6se.jpg?1681755484",
    "https://cdna.artstation.com/p/assets/images/images/061/837/770/large/wlop-4se.jpg?1681755473",
    "https://cdna.artstation.com/p/assets/images/images/060/672/988/large/wlop-3se.jpg?1679060424",
    "https://cdnb.artstation.com/p/assets/images/images/060/672/985/large/wlop-1se.jpg?1679060396",
    "https://cdna.artstation.com/p/assets/images/images/060/672/992/large/wlop-snowse.jpg?1679060410",
    "https://cdnb.artstation.com/p/assets/images/images/060/672/987/large/wlop-2se.jpg?1679060400",
    "https://cdnb.artstation.com/p/assets/images/images/059/418/625/large/wlop-31se.jpg?1676346297",
    "https://cdna.artstation.com/p/assets/images/images/059/418/626/large/wlop-45se.jpg?1676346301",
    "https://cdna.artstation.com/p/assets/images/images/059/418/624/large/wlop-29se.jpg?1676346293",
    "https://cdnb.artstation.com/p/assets/images/images/058/952/883/large/wlop-30se.jpg?1675306311",
    "https://cdna.artstation.com/p/assets/images/images/059/517/720/large/wlop-30tse.jpg?1676555574",
    "https://cdnb.artstation.com/p/assets/images/images/057/769/119/large/wlop-17se.jpg?1672628210",
    "https://cdna.artstation.com/p/assets/images/images/056/335/898/large/wlop-16se.jpg?1669018529",
    "https://cdna.artstation.com/p/assets/images/images/055/697/576/large/wlop-5se.jpg?1667544384",
    "https://cdnb.artstation.com/p/assets/images/images/054/700/325/large/wlop-3se.jpg?1665150308",
    "https://cdnb.artstation.com/p/assets/images/images/054/497/061/large/wlop-1se.jpg?1664691512",
    "https://cdnb.artstation.com/p/assets/images/images/054/088/453/large/wlop-2se.jpg?1663735786",
    "https://cdnb.artstation.com/p/assets/images/images/053/912/339/large/wlop-49sz.jpg?1663310271",
    "https://cdna.artstation.com/p/assets/images/images/053/461/876/large/wlop-66se.jpg?1662278693",
    "https://cdna.artstation.com/p/assets/images/images/053/058/242/large/wlop-65se.jpg?1661324815",
    "https://cdna.artstation.com/p/assets/images/images/052/803/732/large/wlop-50se.jpg?1660714380",
    "https://cdna.artstation.com/p/assets/images/images/052/395/622/large/wlop-51se.jpg?1659672637",
    "https://cdna.artstation.com/p/assets/images/images/052/395/628/original/wlop-1.gif?1659672592",
    "https://cdna.artstation.com/p/assets/images/images/052/395/630/original/wlop-2.gif?1659672599",
    "https://cdna.artstation.com/p/assets/images/images/052/395/632/original/wlop-3.gif?1659672607",
    "https://cdnb.artstation.com/p/assets/images/images/052/403/835/original/wlop-4-1.gif?1659696982",
    "https://cdna.artstation.com/p/assets/images/images/051/774/630/large/wlop-11s.jpg?1658153220",
    "https://cdna.artstation.com/p/assets/images/images/051/701/420/large/wlop-35se.jpg?1657954032",
    "https://cdnb.artstation.com/p/assets/images/images/051/594/225/large/wlop-34se.jpg?1657692924",
    "https://cdnb.artstation.com/p/assets/images/images/051/247/745/large/wlop-33se.jpg?1656829473",
    "https://cdna.artstation.com/p/assets/images/images/050/786/238/large/wlop-30se.jpg?1655709891",
    "https://cdna.artstation.com/p/assets/images/images/050/786/242/large/wlop-31se.jpg?1655709792",
    "https://cdna.artstation.com/p/assets/images/images/050/786/246/large/wlop-32se.jpg?1655709799",
    "https://cdna.artstation.com/p/assets/images/images/050/786/250/large/wlop-1.jpg?1655709810",
    "https://cdna.artstation.com/p/assets/images/images/049/550/596/large/wlop-2se.jpg?1652764144",
    "https://cdna.artstation.com/p/assets/images/images/049/550/594/large/wlop-1se.jpg?1652764125",
    "https://cdna.artstation.com/p/assets/images/images/049/161/516/large/wlop-3se.jpg?1651825778",
    "https://cdna.artstation.com/p/assets/images/images/048/734/418/large/wlop-cover-se.jpg?1650810731",
    "https://cdna.artstation.com/p/assets/images/images/048/035/522/large/wlop-47se.jpg?1649065081",
    "https://cdnb.artstation.com/p/assets/images/images/047/969/347/large/wlop-46se.jpg?1648879300",
    "https://cdna.artstation.com/p/assets/images/images/047/969/350/large/wlop-48se.jpg?1648879281",
    "https://cdnb.artstation.com/p/assets/images/images/047/046/899/large/wlop-43se.jpg?1646889468",
    "https://cdna.artstation.com/p/assets/images/images/047/046/902/large/wlop-44se.jpg?1646643458",
    "https://cdna.artstation.com/p/assets/images/images/047/046/896/large/wlop-42se.jpg?1646643404",
    "https://cdna.artstation.com/p/assets/images/images/047/046/894/large/wlop-41se.jpg?1646643399",
    "https://cdna.artstation.com/p/assets/images/images/046/389/494/large/wlop-14se.jpg?1645007749",
    "https://cdna.artstation.com/p/assets/images/images/046/389/498/large/wlop-26se.jpg?1645007731",
    "https://cdnb.artstation.com/p/assets/images/images/046/389/501/large/wlop-27se.jpg?1645007735",
    "https://cdna.artstation.com/p/assets/images/images/046/389/508/large/wlop-28se.jpg?1645007740",
    "https://cdnb.artstation.com/p/assets/images/images/046/389/513/large/wlop-30se.jpg?1645007748",
    "https://cdnb.artstation.com/p/assets/images/images/046/389/523/large/wlop-31se.jpg?1645007754",
    "https://cdnb.artstation.com/p/assets/images/images/046/389/529/large/wlop-32se.jpg?1645007763",
    "https://cdna.artstation.com/p/assets/images/images/046/389/532/large/wlop-33sg.jpg?1645007767",
    "https://cdnb.artstation.com/p/assets/images/images/045/923/541/large/wlop-23se.jpg?1643862531",
    "https://cdna.artstation.com/p/assets/images/images/045/675/502/large/wlop-21se.jpg?1643266518",
    "https://cdnb.artstation.com/p/assets/images/images/045/259/505/large/wlop-10se.jpg?1642308657",
    "https://cdnb.artstation.com/p/assets/images/images/043/885/703/large/wlop-1se.jpg?1638514429",
    "https://cdnb.artstation.com/p/assets/images/images/043/175/161/large/wlop-67se.jpg?1636521031",
    "https://cdna.artstation.com/p/assets/images/images/043/175/162/large/wlop-68se.jpg?1636521035",
    "https://cdnb.artstation.com/p/assets/images/images/043/175/163/large/wlop-69se.jpg?1636521039",
    "https://cdnb.artstation.com/p/assets/images/images/043/175/165/large/wlop-70se.jpg?1636521044",
    "https://cdnb.artstation.com/p/assets/images/images/042/702/513/large/wlop-61se.jpg?1635233548",
    "https://cdnb.artstation.com/p/assets/images/images/042/663/185/large/wlop-60se.jpg?1635135889",
    "https://cdnb.artstation.com/p/assets/images/images/041/999/159/large/wlop-46se.jpg?1633311662",
    "https://cdna.artstation.com/p/assets/images/images/041/999/148/large/wlop-45se.jpg?1633311612",
    "https://cdnb.artstation.com/p/assets/images/images/041/712/529/large/wlop-39se.jpg?1632465777",
    "https://cdna.artstation.com/p/assets/images/images/041/406/092/large/wlop-38se.jpg?1631619304",
    "https://cdna.artstation.com/p/assets/images/images/041/030/566/large/wlop-31se.jpg?1630556717",
    "https://cdnb.artstation.com/p/assets/images/images/040/163/937/large/wlop-15se.jpg?1628051558",
    "https://cdnb.artstation.com/p/assets/images/images/040/163/941/large/wlop-16se.jpg?1628051549",
    "https://cdnb.artstation.com/p/assets/images/images/040/163/943/large/wlop-17se.jpg?1628051553",
    "https://cdnb.artstation.com/p/assets/images/images/040/163/947/large/wlop-18se.jpg?1628051558",
    "https://cdna.artstation.com/p/assets/images/images/040/966/642/large/wlop-29se.jpg?1630399829",
    "https://cdnb.artstation.com/p/assets/images/images/040/966/645/large/wlop-30se.jpg?1630399834",
    "https://cdnb.artstation.com/p/assets/images/images/039/794/145/large/wlop-14se.jpg?1626956988",
    "https://cdna.artstation.com/p/assets/images/images/039/195/526/large/wlop-4se.jpg?1625200382",
    "https://cdna.artstation.com/p/assets/images/images/038/945/960/large/wlop-3se.jpg?1624507750",
    "https://cdnb.artstation.com/p/assets/images/images/038/359/119/large/wlop-47se.jpg?1622863960",
    "https://cdnb.artstation.com/p/assets/images/images/038/293/241/large/wlop-46se.jpg?1622686958",
    "https://cdna.artstation.com/p/assets/images/images/037/753/024/large/wlop-34se.jpg?1621248400",
    "https://cdna.artstation.com/p/assets/images/images/037/291/422/large/wlop-33se.jpg?1620016916",
    "https://cdnb.artstation.com/p/assets/images/images/036/821/669/large/wlop-22se.jpg?1618722832",
    "https://cdna.artstation.com/p/assets/images/images/036/821/640/large/wlop-21se.jpg?1618722740",
    "https://cdnb.artstation.com/p/assets/images/images/036/821/637/large/wlop-20se.jpg?1618722699",
    "https://cdnb.artstation.com/p/assets/images/images/036/508/665/large/wlop-19se.jpg?1617860152",
    "https://cdna.artstation.com/p/assets/images/images/035/584/926/large/wlop-6se.jpg?1615351472",
    "https://cdna.artstation.com/p/assets/images/images/035/314/932/large/wlop-5se.jpg?1614656893",
    "https://cdna.artstation.com/p/assets/images/images/034/867/066/large/wlop-1se.jpg?1613466066",
    "https://cdnb.artstation.com/p/assets/images/images/034/867/067/large/wlop-2se.jpg?1613466070",
    "https://cdna.artstation.com/p/assets/images/images/034/867/068/large/wlop-3se.jpg?1613466074",
    "https://cdnb.artstation.com/p/assets/images/images/034/867/069/large/wlop-4se.jpg?1613466078",
    "https://cdna.artstation.com/p/assets/images/images/034/867/070/large/wlop-5-1.jpg?1613466083",
    "https://cdnb.artstation.com/p/assets/images/images/034/867/073/large/wlop-5-2.jpg?1613466087",
    "https://cdna.artstation.com/p/assets/images/images/034/867/078/large/wlop-5-3.jpg?1613466093",
    "https://cdnb.artstation.com/p/assets/images/images/034/867/081/large/wlop-5-4.jpg?1613466098",
    "https://cdnb.artstation.com/p/assets/images/images/034/417/545/large/wlop-43se.jpg?1612249966",
    "https://cdna.artstation.com/p/assets/images/images/033/999/712/large/wlop-42se.jpg?1611135777",
    "https://cdna.artstation.com/p/assets/images/images/033/697/594/large/wlop-29se.jpg?1610348123",
    "https://cdna.artstation.com/p/assets/images/images/033/697/582/large/wlop-35se.jpg?1610348084",
    "https://cdnb.artstation.com/p/assets/images/images/033/455/487/large/wlop-20se.jpg?1609677333",
    "https://cdnb.artstation.com/p/assets/images/images/032/884/211/large/wlop-18se.jpg?1607748100",
    "https://cdnb.artstation.com/p/assets/images/images/032/589/707/large/wlop-15se.jpg?1606882646",
    "https://cdnb.artstation.com/p/assets/images/images/032/171/587/large/wlop-8se.jpg?1605669488",
    "https://cdna.artstation.com/p/assets/images/images/032/171/584/large/wlop-7se.jpg?1605669437",
    "https://cdnb.artstation.com/p/assets/images/images/031/887/279/large/wlop-4se.jpg?1604893366",
    "https://cdnb.artstation.com/p/assets/images/images/031/887/285/large/wlop-6se.jpg?1604893379",
    "https://cdnb.artstation.com/p/assets/images/images/031/887/281/large/wlop-5se.jpg?1604893372",
    "https://cdnb.artstation.com/p/assets/images/images/031/648/147/large/wlop-3se.jpg?1604222403",
    "https://cdna.artstation.com/p/assets/images/images/031/009/194/large/wlop-35se.jpg?1602308416",
    "https://cdna.artstation.com/p/assets/images/images/030/855/064/large/wlop-34se.jpg?1601879401",
    "https://cdnb.artstation.com/p/assets/images/images/030/252/755/large/wl-op-19se.jpg?1600068074",
    "https://cdna.artstation.com/p/assets/images/images/030/252/752/large/wl-op-21se.jpg?1600068004",
    "https://cdnb.artstation.com/p/assets/images/images/030/252/757/large/wl-op-20se.jpg?1600068014",
    "https://cdnb.artstation.com/p/assets/images/images/029/337/437/large/wl-op-3se.jpg?1597838842",
    "https://cdna.artstation.com/p/assets/images/images/029/337/438/large/wl-op-4se.jpg?1597838842",
    "https://cdna.artstation.com/p/assets/images/images/029/337/432/large/wl-op-1se.jpg?1597216306",
    "https://cdna.artstation.com/p/assets/images/images/029/337/434/large/wl-op-2se.jpg?1597216309",
    "https://cdna.artstation.com/p/assets/images/images/028/339/108/large/wl-op-4se.jpg?1594184259",
    "https://cdna.artstation.com/p/assets/images/images/028/133/372/large/wl-op-40se.jpg?1593577262",
    "https://cdna.artstation.com/p/assets/images/images/027/723/930/large/wl-op-24se.jpg?1592362157",
    "https://cdnb.artstation.com/p/assets/images/images/027/723/935/large/wl-op-25se.jpg?1592362129",
    "https://cdna.artstation.com/p/assets/images/images/027/723/938/large/wl-op-26se.jpg?1592362133",
    "https://cdna.artstation.com/p/assets/images/images/027/410/470/large/wl-op-20se.jpg?1591458091",
    "https://cdnb.artstation.com/p/assets/images/images/026/882/137/large/wl-op-11se.jpg?1589987621",
    "https://cdnb.artstation.com/p/assets/images/images/026/882/139/large/wl-op-12se.jpg?1589987625",
    "https://cdna.artstation.com/p/assets/images/images/026/882/140/large/wl-op-13se.jpg?1589987628",
    "https://cdna.artstation.com/p/assets/images/images/026/882/142/large/wl-op-14se.jpg?1589987632",
    "https://cdnb.artstation.com/p/assets/images/images/026/882/143/large/wl-op-15dse.jpg?1589987636",
    "https://cdna.artstation.com/p/assets/images/images/026/882/144/large/wl-op-16dse.jpg?1589987640",
    "https://cdna.artstation.com/p/assets/images/images/026/882/146/large/wl-op-17dse.jpg?1589987643",
    "https://cdnb.artstation.com/p/assets/images/images/026/042/649/large/wl-op-1se.jpg?1587706271",
    "https://cdna.artstation.com/p/assets/images/images/025/729/082/large/wl-op-40se.jpg?1586755728",
    "https://cdnb.artstation.com/p/assets/images/images/025/504/219/large/wl-op-39se.jpg?1586006136",
    "https://cdna.artstation.com/p/assets/images/images/025/184/538/large/wl-op-36se.jpg?1584939181",
    "https://cdna.artstation.com/p/assets/images/images/024/631/018/large/wl-op-26se.jpg?1583044741",
    "https://cdna.artstation.com/p/assets/images/images/024/367/548/large/wl-op-21se.jpg?1582179161",
    "https://cdna.artstation.com/p/assets/images/images/024/123/472/large/wl-op-16se.jpg?1581393174",
    "https://cdnb.artstation.com/p/assets/images/images/023/897/833/large/wl-op-9se.jpg?1580703559",
    "https://cdnb.artstation.com/p/assets/images/images/022/862/461/large/wl-op-27se.jpg?1576982071",
    "https://cdna.artstation.com/p/assets/images/images/022/862/460/large/wl-op-26se.jpg?1576982069",
    "https://cdnb.artstation.com/p/assets/images/images/022/862/463/large/wl-op-28se.jpg?1576982073",
    "https://cdna.artstation.com/p/assets/images/images/021/829/548/large/wl-op-14se.jpg?1573093483",
    "https://cdna.artstation.com/p/assets/images/images/021/734/858/large/wl-op-13se.jpg?1572773219",
    "https://cdna.artstation.com/p/assets/images/images/021/083/124/large/wl-op-3s.jpg?1570338646",
    "https://cdnb.artstation.com/p/assets/images/images/020/454/819/large/wl-op-46s.jpg?1567825649",
    "https://cdna.artstation.com/p/assets/images/images/020/021/638/large/wl-op-45s.jpg?1566008397",
    "https://cdnb.artstation.com/p/assets/images/images/020/021/635/large/wl-op-44s.jpg?1566008395",
    "https://cdna.artstation.com/p/assets/images/images/020/021/630/large/wl-op-41s.jpg?1566008391",
    "https://cdna.artstation.com/p/assets/images/images/020/021/628/large/wl-op-25s.jpg?1566008390",
    "https://cdnb.artstation.com/p/assets/images/images/020/021/631/large/wl-op-30s.jpg?1566008392",
    "https://cdna.artstation.com/p/assets/images/images/020/021/634/large/wl-op-34s.jpg?1566008394",
    "https://cdna.artstation.com/p/assets/images/images/020/021/636/large/wl-op-35s.jpg?1566008395",
    "https://cdna.artstation.com/p/assets/images/images/020/021/640/large/wl-op-39s.jpg?1566008397",
    "https://cdnb.artstation.com/p/assets/images/images/020/021/633/large/wl-op-43s.jpg?1566008393",
    "https://cdnb.artstation.com/p/assets/images/images/020/021/639/large/wl-op-3.jpg?1566008395",
    "https://cdna.artstation.com/p/assets/images/images/020/021/642/large/wl-op-4.jpg?1566008399",
    "https://cdna.artstation.com/p/assets/images/images/020/021/644/large/wl-op-6.jpg?1566008408",
    "https://cdnb.artstation.com/p/assets/images/images/020/021/643/large/wl-op-5.jpg?1566008404",
    "https://cdna.artstation.com/p/assets/images/images/020/021/632/large/wl-op-2.jpg?1566008392",
    "https://cdnb.artstation.com/p/assets/images/images/020/021/641/large/wl-op-1.jpg?1566008399",
    "https://cdnb.artstation.com/p/assets/images/images/019/903/557/large/wl-op-1s.jpg?1565517431",
    "https://cdnb.artstation.com/p/assets/images/images/019/697/901/large/wl-op-36s2.jpg?1564628205",
    "https://cdna.artstation.com/p/assets/images/images/019/984/906/large/wl-op-31s.jpg?1565859019",
    "https://cdnb.artstation.com/p/assets/images/images/019/082/153/large/wl-op-32s.jpg?1561953044",
    "https://cdnb.artstation.com/p/assets/images/images/018/338/197/large/wl-op-13s.jpg?1559012418",
    "https://cdna.artstation.com/p/assets/images/images/017/609/292/large/wl-op-4s.jpg?1556677788",
    "https://cdna.artstation.com/p/assets/images/images/017/609/282/large/wl-op-3s.jpg?1556677761",
    "https://cdnb.artstation.com/p/assets/images/images/017/609/281/large/wl-op-1s.jpg?1556677730",
    "https://cdnb.artstation.com/p/assets/images/images/016/565/535/large/wl-op-23s.jpg?1552616913",
    "https://cdnb.artstation.com/p/assets/images/images/016/565/537/large/wl-op-24s.jpg?1552616915",
    "https://cdnb.artstation.com/p/assets/images/images/016/565/539/large/wl-op-25s.jpg?1552616917",
    "https://cdnb.artstation.com/p/assets/images/images/016/565/543/large/wl-op-30s.jpg?1552616921",
    "https://cdnb.artstation.com/p/assets/images/images/016/565/541/large/wl-op-26s.jpg?1552616919",
    "https://cdnb.artstation.com/p/assets/images/images/015/882/009/large/wl-op-21s.jpg?1550027192",
    "https://cdna.artstation.com/p/assets/images/images/015/111/076/large/wl-op-1s.jpg?1547095357",
    "https://cdnb.artstation.com/p/assets/images/images/015/111/079/large/wl-op-2s.jpg?1547095317",
    "https://cdna.artstation.com/p/assets/images/images/015/111/080/large/wl-op-3s.jpg?1547095319",
    "https://cdnb.artstation.com/p/assets/images/images/015/111/081/large/wl-op-10s.jpg?1547095321",
    "https://cdnb.artstation.com/p/assets/images/images/014/863/233/large/wl-op-9s.jpg?1545968358",
    "https://cdna.artstation.com/p/assets/images/images/014/565/184/large/wl-op-34s.jpg?1544511863",
    "https://cdna.artstation.com/p/assets/images/images/014/204/228/large/wl-op-27s.jpg?1542943813",
    "https://cdna.artstation.com/p/assets/images/images/013/561/672/large/wl-op-19s.jpg?1540182458",
    "https://cdna.artstation.com/p/assets/images/images/013/186/192/large/wl-op-12s.jpg?1538468436",
    "https://cdna.artstation.com/p/assets/images/images/012/929/874/large/wl-op-3s.jpg?1537238794",
    "https://cdna.artstation.com/p/assets/images/images/012/929/876/large/wl-op-4s.jpg?1537238766",
    "https://cdna.artstation.com/p/assets/images/images/012/929/878/large/wl-op-6s.jpg?1537238768",
    "https://cdna.artstation.com/p/assets/images/images/012/929/880/large/wl-op-7s.jpg?1537238770",
    "https://cdnb.artstation.com/p/assets/images/images/014/781/671/large/wl-op-0s.jpg?1545445687",
    "https://cdnb.artstation.com/p/assets/images/images/014/781/675/large/wl-op-7s.jpg?1545445692",
    "https://cdna.artstation.com/p/assets/images/images/014/781/672/large/wl-op-5s.jpg?1545445689",
    "https://cdnb.artstation.com/p/assets/images/images/014/781/673/large/wl-op-6s.jpg?1545445690",
    "https://cdnb.artstation.com/p/assets/images/images/012/821/927/large/wl-op-2s.jpg?1536690499",
    "https://cdna.artstation.com/p/assets/images/images/012/509/152/large/wl-op-25s.jpg?1535132131",
    "https://cdna.artstation.com/p/assets/images/images/012/231/554/large/wl-op-18s.jpg?1533727304",
    "https://cdna.artstation.com/p/assets/images/images/012/095/268/large/wl-op-5s.jpg?1533016199",
    "https://cdnb.artstation.com/p/assets/images/images/011/395/965/large/wl-op-48s.jpg?1529383032",
    "https://cdna.artstation.com/p/assets/images/images/011/250/848/large/wl-op-57s.jpg?1528635635",
    "https://cdna.artstation.com/p/assets/images/images/010/811/274/large/wl-op-44s.jpg?1526359591",
    "https://cdna.artstation.com/p/assets/images/images/010/574/384/large/wl-op-36s.jpg?1525141880",
    "https://cdna.artstation.com/p/assets/images/images/010/317/772/large/wl-op-26s.jpg?1523799105",
    "https://cdnb.artstation.com/p/assets/images/images/009/892/355/large/wl-op-18s.jpg?1521455110",
    "https://cdnb.artstation.com/p/assets/images/images/009/181/067/large/wl-op-1s.jpg?1517544205",
    "https://cdnb.artstation.com/p/assets/images/images/008/734/409/large/wl-op-45s.jpg?1514954460",
    "https://cdnb.artstation.com/p/assets/images/images/008/576/661/large/wl-op-34s.jpg?1513680648",
    "https://cdna.artstation.com/p/assets/images/images/008/464/786/large/wl-op-24s.jpg?1512971149",
    "https://cdnb.artstation.com/p/assets/images/images/008/014/601/large/wl-op-19s.jpg?1509935788",
    "https://cdna.artstation.com/p/assets/images/images/007/580/452/large/wl-op-3s.jpg?1507111680",
    "https://cdna.artstation.com/p/assets/images/images/007/328/206/large/wl-op-31s.jpg?1505357660",
    "https://cdnb.artstation.com/p/assets/images/images/006/876/003/large/wl-op-10s.jpg?1501903582",
    "https://cdnb.artstation.com/p/assets/images/images/006/804/593/large/wl-op-3s.jpg?1501384528",
    "https://cdnb.artstation.com/p/assets/images/images/006/532/999/large/wl-op-11s.jpg?1499314995",
    "https://cdnb.artstation.com/p/assets/images/images/006/221/475/large/wl-op-7s.jpg?1496896176",
    "https://cdna.artstation.com/p/assets/images/images/005/936/176/large/wl-op-2s.jpg?1494846342",
    "https://cdna.artstation.com/p/assets/images/images/005/406/836/large/wl-op-26s.jpg?1490803082",
    "https://cdnb.artstation.com/p/assets/images/images/005/196/445/large/wl-op-19s.jpg?1489218074",
    "https://cdnb.artstation.com/p/assets/images/images/005/072/643/large/wl-op-16s.jpg?1488296883",
    "https://cdna.artstation.com/p/assets/images/images/004/731/426/large/wl-op-9s.jpg?1485862559",
    "https://cdnb.artstation.com/p/assets/images/images/004/593/895/large/wl-op-8s.jpg?1484838419",
    "https://cdna.artstation.com/p/assets/images/images/004/514/916/large/wl-op-7s.jpg?1484229968",
    "https://cdna.artstation.com/p/assets/images/images/004/393/456/large/wl-op-6s.jpg?1483372034",
    "https://cdna.artstation.com/p/assets/images/images/004/168/414/large/wl-op-1s.jpg?1481001995",
    "https://cdna.artstation.com/p/assets/images/images/003/966/570/large/wl-op-5s.jpg?1479016157",
    "https://cdna.artstation.com/p/assets/images/images/003/820/382/large/wl-op-claw-by-wlop-damkn2i.jpg?1477660082",
    "https://cdna.artstation.com/p/assets/images/images/003/252/982/large/wl-op-7ss.jpg?1471661590",
    "https://cdna.artstation.com/p/assets/images/images/002/960/554/large/wl-op-1s.jpg?1467796417",
    "https://cdnb.artstation.com/p/assets/images/images/002/802/883/large/wl-op-img-2822.jpg?1465897404",
    "https://cdnb.artstation.com/p/assets/images/images/002/661/063/large/wl-op-7s.jpg?1464227390",
    "https://cdna.artstation.com/p/assets/images/images/002/563/578/large/wl-op-3m.jpg?1463132191",
    "https://cdnb.artstation.com/p/assets/images/images/002/489/155/large/wl-op-2m.jpg?1462353926",
    "https://cdnb.artstation.com/p/assets/images/images/002/367/355/large/wl-op-18m.jpg?1460863839",
    "https://cdnb.artstation.com/p/assets/images/images/002/208/737/large/wl-op-6b8c14f8jw1f261rqbhg1j21040l1jxr.jpg?1458722862",
    "https://cdnb.artstation.com/p/assets/images/images/001/959/839/large/wl-op-15m.jpg?1455181085",
    "https://cdnb.artstation.com/p/assets/images/images/001/755/589/large/wl-op-5m.jpg?1452256619",
    "https://cdnb.artstation.com/p/assets/images/images/001/670/365/large/wl-op-7m.jpg?1450505811",
    "https://cdnb.artstation.com/p/assets/images/images/001/528/223/large/wl-op-3m.jpg?1448025162",
    "https://cdna.artstation.com/p/assets/images/images/001/394/260/large/wl-op-11s.jpg?1445677999",
    "https://cdna.artstation.com/p/assets/images/images/001/337/630/large/wl-op-7s.jpg?1444639378",
    "https://cdna.artstation.com/p/assets/images/images/001/218/830/large/wl-op-12s.jpg?1443928242",
    "https://cdnb.artstation.com/p/assets/images/images/001/192/497/large/wl-op-11s.jpg?1441903566",
    "https://cdnb.artstation.com/p/assets/images/images/000/737/559/large/wl-op-saber-by-wlop-d8tjwa5.jpg?1443929352",
    "https://cdnb.artstation.com/p/assets/images/images/000/618/381/large/wl-op-9s.jpg?1443929720",
    "https://cdnb.artstation.com/p/assets/images/images/000/826/927/large/wl-op-1.jpg?1443929888",
    "https://cdna.artstation.com/p/assets/images/images/000/591/530/large/wl-op-4s.jpg?1443930173",
    "https://cdnb.artstation.com/p/assets/images/images/000/538/473/large/wl-op-5d91c56cbffa03c111724e40984a1c4277fc0092.jpg?1443930480",
    "https://cdna.artstation.com/p/assets/images/images/000/531/292/large/wl-op-hope-by-wlop-d7qrt1e.jpg?1443931135",
    "https://cdna.artstation.com/p/assets/images/images/000/826/910/large/wl-op-100-s.jpg?1443931462"
];


const player = document.getElementById("player");
const overlay = document.getElementById("overlay");
const transition = document.getElementById("transition");
const title = document.getElementById("songTitle");

const backgrounds = [
    document.getElementById("bg1"),
    document.getElementById("bg2")
];


let activeBackground = 0;

let currentSong = -1;
let currentWallpaper = -1;



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function randomSong() {

    let next;

    do {
        next = Math.floor(Math.random() * songs.length);
    }
    while (
        songs.length > 1 &&
        next === currentSong
    );

    currentSong = next;

    return songs[next];
}



function randomWallpaper() {

    let next;

    do {
        next = Math.floor(Math.random() * wallpapers.length);
    }
    while (
        wallpapers.length > 1 &&
        next === currentWallpaper
    );

    currentWallpaper = next;

    return wallpapers[next];
}



function preloadImage(url) {

    return new Promise((resolve, reject) => {

        const img = new Image();

        img.onload = () => resolve();

        img.onerror = reject;

        img.src = url;

    });

}



async function setWallpaper(url) {

    const nextBackground =
        backgrounds[1 - activeBackground];


    await preloadImage(url);


    nextBackground.classList.remove("zoom");


    nextBackground.src = url;


    // restart animation
    void nextBackground.offsetWidth;


    nextBackground.classList.add("zoom");


    backgrounds[activeBackground]
        .classList.remove("active");


    nextBackground.classList.add("active");


    activeBackground =
        1 - activeBackground;

}



function showTitle(text) {

    title.textContent = text;


    title.style.opacity = 1;


    setTimeout(() => {

        title.style.opacity = 0;

    }, 6000);

}



async function playExperience() {

    const song = randomSong();

    const wallpaper = randomWallpaper();


    transition.classList.add("show");


    await sleep(1000);


    await setWallpaper(wallpaper);


    player.src = song.url;


    await player.play();


    showTitle(song.title);


    transition.classList.remove("show");

}



overlay.addEventListener(
    "click",
    async () => {

        overlay.classList.add("hidden");

        await playExperience();

    }
);



player.addEventListener(
    "loadedmetadata",
    () => {

        const duration =
            Math.max(player.duration, 20);


        backgrounds[activeBackground]
            .style.animationDuration =
            `${duration}s`;

    }
);



player.addEventListener(
    "ended",
    async () => {

        await playExperience();

    }
);