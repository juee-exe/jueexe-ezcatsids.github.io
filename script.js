// primary dataset used on index.html (cats)
const catData = {
  "Normal": {
    "Normal cats": [
      //All normal cats//
      { id: 0, name: "Cat", img: "images/Normal/Uni000_s00.png" },
      { id: 1, name: "Tank Cat", img: "images/Normal/Uni001_s00.png" },
      { id: 2, name: "Axe Cat", img: "images/Normal/Uni002_s00.png" },
      { id: 3, name: "Gross Cat", img: "images/Normal/Uni003_s00.png" },
      { id: 4, name: "Cow Cat", img: "images/Normal/Uni004_s00.png" },
      { id: 5, name: "Bird Cat", img: "images/Normal/Uni005_s00.png" },
      { id: 6, name: "Fish Cat", img: "images/Normal/Uni006_s00.png" },
      { id: 7, name: "Lizard Cat", img: "images/Normal/Uni007_s00.png" },
      { id: 8, name: "Titan Cat", img: "images/Normal/Uni008_s00.png" },
      { id: 643, name: "Superfeline", img: "images/Normal/Uni643_s00.png" }
    ]
    
  },
  "Special": {
    "Purchasable": [
      //All Purchasable cats//
      { id: 18, name: "Ninja Cat", img: "images/Special/Purchasable/Uni018_s00.png" },
      { id: 21, name: "Sumo Cat", img: "images/Special/Purchasable/Uni021_s00.png" },
      { id: 20, name: "Samurai Cat", img: "images/Special/Purchasable/Uni020_s00.png" },
      { id: 19, name: "Zombie Cat", img: "images/Special/Purchasable/Uni019_s00.png" },
      { id: 14, name: "Cats in a Box", img: "images/Special/Purchasable/Uni014_s00.png" },
      { id: 22, name: "Boogie Cat", img: "images/Special/Purchasable/Uni022_s00.png" },
      { id: 12, name: "Bondage Cat", img: "images/Special/Purchasable/Uni012_s00.png" },
      { id: 13, name: "Dom Cat", img: "images/Special/Purchasable/Uni013_s00.png" },
      { id: 10, name: "Kung Fu Cat", img: "images/Special/Purchasable/Uni010_s00.png" },
      { id: 9, name: "Actress Cat", img: "images/Special/Purchasable/Uni009_s00.png" },
      { id: 23, name: "Skirt Cat", img: "images/Special/Purchasable/Uni023_s00.png" },
      { id: 15, name: "Panties Cat", img: "images/Special/Purchasable/Uni015_s00.png" },
      { id: 11, name: "Mr.", img: "images/Special/Purchasable/Uni011_s00.png" },
    ],
    "Unlockable": [
      { id: 24, name: "Valkyrie Cat", img: "images/Special/Unlockable/Uni024_s00.png" },
      { id: 25, name: "Bahamut Cat", img: "images/Special/Unlockable/Uni025_s00.png" },
      { id: 437, name: "Cat God the Great", img: "images/Special/Unlockable/Uni437_s00.png" },
      { id: 462, name: "Filibuster Cat X", img: "images/Special/Unlockable/Uni462_s00.png" },
      { id: 622, name: "Jagando Jr.", img: "images/Special/Unlockable/Uni622_c00.png" },
      { id: 130, name: "Ururun Wolf", img: "images/Special/Unlockable/Uni130_s00.png" },
      { id: 172, name: "Li'l Nyandam", img: "images/Special/Unlockable/Uni172_s00.png" },
      { id: 268, name: "Red Riding Mina", img: "images/Special/Unlockable/Uni268_s00.png" },
      { id: 323, name: "Miyamoku Musashi", img: "images/Special/Unlockable/Uni323_s00.png" },
      { id: 426, name: "Mecha-Bun", img: "images/Special/Unlockable/Uni426_s00.png" },
      { id: 568, name: "Idi:N", img: "images/Special/Unlockable/Uni568_s00.webp" },
      { id: 464, name: "Dogumaru", img: "images/Special/Unlockable/Uni464_s00.png" },
      { id: 532, name: "Urs & Fenrir", img: "images/Special/Unlockable/Uni532_s00.png" },
      { id: 613, name: "Elder Mask Doron", img: "images/Special/Unlockable/Uni613_s00.png" },
      { id: 653, name: "Elder Beast Naala", img: "images/Special/Unlockable/Uni653_s00.png" },
      { id: 691, name: "Ancient Egg: N000", img: "images/Special/Unlockable/Uni691_s00.png" },
      { id: 771, name: "Master of Life Dr. Nova", img: "images/Special/Unlockable/Uni771_c00.webp" },
      { id: 728, name: "Master of Mind Soractes", img: "images/Special/Unlockable/Uni728_c00.webp" },
      { id: 801, name: "801", img: "images/Special/Unlockable/Uni801_c00.webp" },
      { id: 352, name: "Hermit Cat", img: "images/Special/Unlockable/Uni352_s00.png" },
      { id: 383, name: "Masked Yulala", img: "images/Special/Unlockable/Uni383_s00.png" },
      { id: 554, name: "Master Uril", img: "images/Special/Unlockable/Uni554_s00.webp" },
      { id: 16, name: "Moneko", img: "images/Special/Unlockable/Uni016_s00.png" },
      { id: 17, name: "Tricycle Cat", img: "images/Special/Unlockable/Uni017_s00.png" },
      { id: 123, name: "Bean Cats", img: "images/Special/Unlockable/Uni123_s00.webp" },
      { id: 127, name: "Flower Cat", img: "images/Special/Unlockable/Uni127_s00.webp" },
      { id: 418, name: "Crazed Moneko", img: "images/Special/Unlockable/Uni418_c00.png" },
      { id: 656, name: "Ancient Egg: N001", img: "images/Special/Unlockable/Uni656_s00.png" },
      { id: 669, name: "Ancient Egg: N003", img: "images/Special/Unlockable/Uni669_s00.png" },
      { id: 685, name: "Ancient Egg: N004", img: "images/Special/Unlockable/Uni685_s00.png" },
      { id: 700, name: "Ancient Egg: N005", img: "images/Special/Unlockable/Uni700_s00.webp" },
      { id: 720, name: "Ancient Egg: N006", img: "images/Special/Unlockable/Uni720_s00.webp" },
      { id: 375, name: "Coin Cat", img: "images/Special/Unlockable/Uni375_c00.webp" },
      { id: 610, name: "Gold Brick Cat", img: "images/Special/Unlockable/Uni610_s00.png" },
      { id: 776, name: "Lieutenant Cat", img: "images/Special/Unlockable/Uni776_c00.webp" },
      { id: 832, name: "", img: "images/Special/Unlockable/Uni832_c00.webp" },
      { id: 833, name: "", img: "images/Special/Unlockable/Uni833_c00.webp" },
      { id: 834, name: "", img: "images/Special/Unlockable/Uni834_c00.webp" },
      { id: 835, name: "", img: "images/Special/Unlockable/Uni835_c00.webp" },
      { id: 28, name: "", img: "images/Special/Unlockable/Uni028_c00.png" },
    ],
    "Event Gacha": [
      //Lil cats//
      { id: 209, name: "Li'l Cat", img: "images/Special/Event_Gacha/Uni209_s00.png" },
      { id: 210, name: "Li'l Tank Cat", img: "images/Special/Event_Gacha/Uni210_s00.png" },
      { id: 211, name: "Li'l Axe Cat", img: "images/Special/Event_Gacha/Uni211_s00.png" },
      { id: 245, name: "Li'l Gross Cat", img: "images/Special/Event_Gacha/Uni245_s00.png" },
      { id: 246, name: "Li'l Cow Cat", img: "images/Special/Event_Gacha/Uni246_s00.png" },
      { id: 247, name: "Li'l Bird Cat", img: "images/Special/Event_Gacha/Uni247_s00.png" },
      { id: 311, name: "Li'l Fish Cat", img: "images/Special/Event_Gacha/Uni311_s00.png" },
      { id: 312, name: "Li'l Lizard Cat", img: "images/Special/Event_Gacha/Uni312_s00.png" },
      { id: 313, name: "Li'l Titan Cat", img: "images/Special/Event_Gacha/Uni313_s00.png" },

      //Oter event gacha cats//
      { id: 381, name: "Farmer Cat", img: "images/Special/Event_Gacha/Uni381_c00.webp" },
      { id: 615, name: "Kabuto Cat", img: "images/Special/Event_Gacha/Uni615_c00.png" },
      { id: 616, name: "Kuwagata Cat", img: "images/Special/Event_Gacha/Uni616_c00.png" },
      { id: 670, name: "Ancient Egg: N202", img: "images/Special/Event_Gacha/Uni670_s00.png" },
      { id: 765, name: "Ancient Egg: N206", img: "images/Special/Event_Gacha/Uni765_s00.webp" },
      { id: 766, name: "Sardine", img: "images/Special/Event_Gacha/Uni766_c00.webp" },
      { id: 767, name: "Squid", img: "images/Special/Event_Gacha/Uni767_c00.webp" },
      { id: 646, name: "Firecracker Cat", img: "images/Special/Event_Gacha/Uni646_c00.png" },
      { id: 202, name: "Big Baozi", img: "images/Special/Event_Gacha/Uni202_c00.webp" },
      { id: 82, name: "Blue Shinobi", img: "images/Special/Event_Gacha/Uni082_c00.png" },
      { id: 730, name: "Ancient Egg: N204", img: "images/Special/Event_Gacha/Uni730_s00.webp" },
      { id: 650, name: "Secret Crush Cat", img: "images/Special/Event_Gacha/Uni650_c00.png" },
      { id: 651, name: "Tomboy Lion Cat", img: "images/Special/Event_Gacha/Uni651_c00.png" },
      { id: 652, name: "Chalkboard Eraser Cat", img: "images/Special/Event_Gacha/Uni652_c00.png" },
      { id: 696, name: "Class Rep Cat", img: "images/Special/Event_Gacha/Uni696_c00.png" },
      { id: 853, name: "Green Cat", img: "images/Special/Event_Gacha/Uni853_c00.webp" },
      { id: 248, name: "Undead Cat", img: "images/Special/Event_Gacha/Uni248_s00.png" },
      { id: 665, name: "Ancient Egg: N201", img: "images/Special/Event_Gacha/Uni665_s00.png" },
      { id: 713, name: "Ancient Egg: N203", img: "images/Special/Event_Gacha/Uni713_s00.webp" },
      { id: 757, name: "Ancient Egg: N205", img: "images/Special/Event_Gacha/Uni757_s00.webp" },
      { id: 342, name: "Maneki Cat", img: "images/Special/Event_Gacha/Uni342_c00.webp" },
      { id: 635, name: "Million-Dollar Cat", img: "images/Special/Event_Gacha/Uni635_c00.png" },
      { id: 689, name: "Meditation Cat", img: "images/Special/Event_Gacha/Uni689_c00.png" },
      { id: 822, name: "Consultant Cat", img: "images/Special/Event_Gacha/Uni822_c00.webp" },
      { id: 213, name: "Catburger", img: "images/Special/Event_Gacha/Uni213_s00.png" },
      { id: 726, name: "Medal King", img: "images/Special/Event_Gacha/Uni726_c00.png" },
      { id: 831, name: "Red Cat", img: "images/Special/Event_Gacha/Uni831_c00.webp" },
    ],
    "Miscellaneous": [
      { id: 558, name: "Gacha Cat", img: "images/Special/Miscellaneous/Uni558_c00.png" },
      { id: 735, name: "Principal Cat", img: "images/Special/Miscellaneous/Uni735_c00.webp" },
      { id: 740, name: "Trash Cat", img: "images/Special/Miscellaneous/Uni740_c00.webp" },
    ],
    "Collaboration": [
      //01//
      { id: 26, name: "Kerihime ", img: "images/Special/Collaborations/Uni026_s00.webp" },
      { id: 27, name: "Cat Princess", img: "images/Special/Collaborations/Uni027_c00.webp" },

      //02//
      { id: 103, name: "Cabaret Cat", img: "images/Special/Collaborations/Uni103_s00.webp" },

      //03//
      { id: 120, name: "Healer", img: "images/Special/Collaborations/Uni120_s00.webp" },
      { id: 121, name: "Merc", img: "images/Special/Collaborations/Uni121_s00.webp" },
      { id: 191, name: "Titi", img: "images/Special/Collaborations/Uni191_s00.webp" },

      //04//
      { id: 175, name: "Meowla Meowla", img: "images/Special/Collaborations/Uni175_c00.png" },
      { id: 766, name: "Sardine", img: "images/Special/Collaborations/Uni766_c00.webp" },
      { id: 767, name: "Squid", img: "images/Special/Collaborations/Uni767_c00.webp" },
      { id: 813, name: "Tasmanian Giant Crab", img: "images/Special/Collaborations/Uni813_c00.png" },

      //05//
      { id: 181, name: "Yuki Cat", img: "images/Special/Collaborations/Uni181_c00.webp" },

      //06//
      { id: 184, name: "Mr. Ninja", img: "images/Special/Collaborations/Uni184_c00.png" },

      //07//
      { id: 278, name: "Tanky", img: "images/Special/Collaborations/Uni278_c00.png" },
      { id: 279, name: "White Cat", img: "images/Special/Collaborations/Uni279_c00.png" },
      { id: 280, name: "Fortressy", img: "images/Special/Collaborations/Uni280_c00.png" },

      //08//
      { id: 300, name: "Li'l Homura", img: "images/Special/Collaborations/Uni300_s00.webp" },

      //09//
      { id: 317, name: "CPAC", img: "images/Special/Collaborations/Uni317_c00.png" },

      //10//
      { id: 328, name: "Happy 100", img: "images/Special/Collaborations/Uni328_c00.png" },
      
      //Fate/Stay Night: Heaven's Feel Collaboration Event//
      { id: 369, name: "Saber the Cat", img: "images/Special/Collaborations/Uni369_s00.webp" },
      { id: 374, name: "Li'l Sakura", img: "images/Special/Collaborations/Uni374_c00.webp" },
      { id: 457, name: "Shirou the Cat", img: "images/Special/Collaborations/Uni457_c00.webp" },

      //Power Pro Baseball Collaboration Event//
      { id: 384, name: "Satori Hikami & Cat", img: "images/Special/Collaborations/Uni384_c00.webp" },

      //Mentori Collaboration Event//
      { id: 400, name: "Imoto", img: "images/Special/Collaborations/Uni400_c00.webp" },

      //Neon Genesis Evangelion Collaboration Event//
      { id: 403, name: "Gendo & Fuyutsuki Cats", img: "images/Special/Collaborations/Uni403_c00.webp" },
      { id: 405, name: "Kaworu & Cat", img: "images/Special/Collaborations/Uni405_s00.png" },

      //Nekokkuma//
      { id: 433, name: "Nekokkuma", img: "images/Special/Collaborations/Uni433_c00.png" },

      //Bikkuriman Collaboration Event//
      { id: 474, name: "Rosary Angel", img: "images/Special/Collaborations/Uni474_s00.webp" },
      { id: 475, name: "Wakamiko Cat", img: "images/Special/Collaborations/Uni475_c00.webp" },
      { id: 476, name: "Cat Devil", img: "images/Special/Collaborations/Uni476_c00.webp" },
      { id: 477, name: "Nekonosuke", img: "images/Special/Collaborations/Uni477_c00.webp" },
      { id: 557, name: "Heavenly Jack", img: "images/Special/Collaborations/Uni557_c00.png" },

      //Shakurel Planet Collaboration Event//
      { id: 497, name: "Shakurel Cat", img: "images/Special/Collaborations/Uni497_c00.png" },
      { id: 498, name: "Shakurel Lion", img: "images/Special/Collaborations/Uni498_c00.png" },
      { id: 499, name: "Shakurel Tiger", img: "images/Special/Collaborations/Uni499_c00.png" },
      { id: 500, name: "Shakurel Panda", img: "images/Special/Collaborations/Uni500_c00.png" },

      //Street Fighter Collaboration Event//
      { id: 509, name: "Chun-Li Cat", img: "images/Special/Collaborations/Uni509_c00.png" },

      //Ranma 1/2 Collaboration Event//
      { id: 606, name: "Panda Cat", img: "images/Special/Collaborations/Uni606_c00.png" },

      //World Trigger Collaboration Event//
      { id: 679, name: "Chika Amatori & Cat", img: "images/Special/Collaborations/Uni679_c00.png" },

      //Tower of Saviors Collaboration Event//
      { id: 744, name: "Felix the Cat Duke Cat", img: "images/Special/Collaborations/Uni744_c00.webp" },
      { id: 745, name: "Dotty Cat", img: "images/Special/Collaborations/Uni745_c00.webp" },

      //Rurouni Kenshin Collaboration Event//
      { id: 753, name: "Kaoru Cat", img: "images/Special/Collaborations/Uni753_c00.webp" },

      //Baki Hanma Collaboration Event//
      { id: 795, name: "Li'l Baki", img: "images/Special/Collaborations/Uni795_c00.webp" },
      { id: 796, name: "Baki Cat", img: "images/Special/Collaborations/Uni796_c00.webp" },
      { id: 797, name: "Kaioh Cat", img: "images/Special/Collaborations/Uni797_c00.webp" },
      { id: 798, name: "Doppo Cat", img: "images/Special/Collaborations/Uni798_c00.webp" },

      //Sonic the Hedgehog Collaboration Event//
      { id: 808, name: "Tails Cat", img: "images/Special/Collaborations/Uni808_c00.png" },

      //Demon slayer collaboration event//
      { id: 849, name: "Nezuko Cat", img: "images/Special/Collaborations/Uni849_c00.webp" },
    ]
  },
  "Rare": {
    "Gacha": [
      { id: 37, name: "", img: "images/Rare/Gacha/Uni037_s00.png" },
      { id: 38, name: "", img: "images/Rare/Gacha/Uni038_s00.png" },
      { id: 41, name: "", img: "images/Rare/Gacha/Uni041_s00.png" },
      { id: 46, name: "", img: "images/Rare/Gacha/Uni046_s00.png" },
      { id: 47, name: "", img: "images/Rare/Gacha/Uni047_s00.png" },
      { id: 48, name: "", img: "images/Rare/Gacha/Uni048_s00.png" },
      { id: 49, name: "", img: "images/Rare/Gacha/Uni049_s00.png" },
      { id: 50, name: "", img: "images/Rare/Gacha/Uni050_s00.png" },
      { id: 51, name: "", img: "images/Rare/Gacha/Uni051_s00.png" },
      { id: 52, name: "", img: "images/Rare/Gacha/Uni052_s00.png" },
      { id: 55, name: "", img: "images/Rare/Gacha/Uni055_s00.png" },
      { id: 56, name: "", img: "images/Rare/Gacha/Uni056_s00.png" },
      { id: 58, name: "", img: "images/Rare/Gacha/Uni058_s00.png" },
      { id: 145, name: "", img: "images/Rare/Gacha/Uni145_s00.png" },
      { id: 146, name: "", img: "images/Rare/Gacha/Uni146_s00.webp" },
      { id: 147, name: "", img: "images/Rare/Gacha/Uni147_s00.png" },
      { id: 148, name: "", img: "images/Rare/Gacha/Uni148_s00.png" },
      { id: 149, name: "", img: "images/Rare/Gacha/Uni149_s00.png" },
      { id: 197, name: "", img: "images/Rare/Gacha/Uni197_s00.webp" },
      { id: 198, name: "", img: "images/Rare/Gacha/Uni198_s00.webp" },
      { id: 308, name: "", img: "images/Rare/Gacha/Uni308_s00.png" },
      { id: 325, name: "", img: "images/Rare/Gacha/Uni325_s00.webp" },
      { id: 376, name: "", img: "images/Rare/Gacha/Uni376_s00.webp" },
      { id: 495, name: "", img: "images/Rare/Gacha/Uni495_s00.png" },
      { id: 523, name: "", img: "images/Rare/Gacha/Uni523_s00.png" },
    ],
    "Monthly": [
      { id: 63, name: "", img: "images/Rare/Monthly/Uni063_s00.png" },
      { id: 70, name: "", img: "images/Rare/Monthly/Uni070_s00.png" },
      { id: 74, name: "", img: "images/Rare/Monthly/Uni074_s00.png" },
      { id: 79, name: "", img: "images/Rare/Monthly/Uni079_s00.png" },
      { id: 80, name: "", img: "images/Rare/Monthly/Uni080_s00.png" },
      { id: 81, name: "", img: "images/Rare/Monthly/Uni081_s00.png" },
      { id: 100, name: "", img: "images/Rare/Monthly/Uni100_s00.webp" },
      { id: 104, name: "", img: "images/Rare/Monthly/Uni104_s00.png" },
      { id: 109, name: "", img: "images/Rare/Monthly/Uni109_s00.png" },
      { id: 122, name: "", img: "images/Rare/Monthly/Uni122_s00.png" },
      { id: 128, name: "", img: "images/Rare/Monthly/Uni128_s00.png" },
      { id: 132, name: "", img: "images/Rare/Monthly/Uni132_s00.png" },
    ],
    "Rewards": [
      //Cyclone Gang//
      { id: 60, name: "", img: "images/Rare/Rewards/Uni060_s00.png" },
      { id: 78, name: "", img: "images/Rare/Rewards/Uni078_s00.png" },
      { id: 88, name: "", img: "images/Rare/Rewards/Uni088_s00.png" },
      { id: 126, name: "", img: "images/Rare/Rewards/Uni126_s00.png" },
      { id: 154, name: "", img: "images/Rare/Rewards/Uni154_s00.png" },
      { id: 201, name: "", img: "images/Rare/Rewards/Uni201_s00.webp" },
      { id: 379, name: "", img: "images/Rare/Rewards/Uni379_s00.png" },
      { id: 452, name: "", img: "images/Rare/Rewards/Uni452_s00.png" },
      { id: 621, name: "", img: "images/Rare/Rewards/Uni621_s00.webp" },

      //Tier 1 advent stage//
      { id: 324, name: "", img: "images/Rare/Rewards/Uni324_s00.webp" },
      { id: 382, name: "", img: "images/Rare/Rewards/Uni382_s00.png" },
      { id: 442, name: "", img: "images/Rare/Rewards/Uni442_s00.png" },  
      { id: 507, name: "", img: "images/Rare/Rewards/Uni507_c00.png" },
      { id: 531, name: "", img: "images/Rare/Rewards/Uni531_s00.png" },
      { id: 581, name: "", img: "images/Rare/Rewards/Uni581_c00.png" },
      { id: 623, name: "", img: "images/Rare/Rewards/Uni623_s00.webp" },
      { id: 630, name: "", img: "images/Rare/Rewards/Uni630_c00.png" },
      { id: 708, name: "", img: "images/Rare/Rewards/Uni708_c00.webp" },

      //Tier 2 advent stage//
      { id: 521, name: "", img: "images/Rare/Rewards/Uni521_s00.png" },
      { id: 527, name: "", img: "images/Rare/Rewards/Uni527_s00.webp" },
      { id: 528, name: "", img: "images/Rare/Rewards/Uni528_s00.webp" },
      { id: 539, name: "", img: "images/Rare/Rewards/Uni539_s00.webp" },
      { id: 545, name: "", img: "images/Rare/Rewards/Uni545_s00.webp" },
      { id: 553, name: "", img: "images/Rare/Rewards/Uni553_s00.webp" },
      { id: 718, name: "", img: "images/Rare/Rewards/Uni718_c00.webp" },
      { id: 780, name: "", img: "images/Rare/Rewards/Uni780_c00.webp" },
      { id: 819, name: "", img: "images/Rare/Rewards/Uni819_c00.webp" },
      { id: 851, name: "", img: "images/Rare/Rewards/Uni851_c00.webp" },

      //Behemoth curling stage//
      { id: 658, name: "", img: "images/Rare/Rewards/Uni658_s00.png" },
      { id: 659, name: "", img: "images/Rare/Rewards/Uni659_s00.png" },
      { id: 663, name: "", img: "images/Rare/Rewards/Uni663_s00.png" },
      { id: 664, name: "", img: "images/Rare/Rewards/Uni664_s00.png" },
      { id: 675, name: "", img: "images/Rare/Rewards/Uni675_s00.png" },
      { id: 676, name: "", img: "images/Rare/Rewards/Uni676_s00.png" },
      { id: 697, name: "", img: "images/Rare/Rewards/Uni697_s00.png" },
      { id: 707, name: "", img: "images/Rare/Rewards/Uni707_s00.webp" },
      { id: 717, name: "", img: "images/Rare/Rewards/Uni717_s00.webp" },
      { id: 724, name: "", img: "images/Rare/Rewards/Uni724_s00.webp" },
    ],
    "Celebrations": [
      { id: 176, name: "", img: "images/Rare/Celebrations/Uni176_c00.png" },
      { id: 183, name: "", img: "images/Rare/Celebrations/Uni183_s00.png" },
      { id: 227, name: "", img: "images/Rare/Celebrations/Uni227_s00.png" },
      { id: 244, name: "", img: "images/Rare/Celebrations/Uni244_c00.png" },
      { id: 282, name: "", img: "images/Rare/Celebrations/Uni282_s00.png" },
      { id: 303, name: "", img: "images/Rare/Celebrations/Uni303_s00.webp" },
      { id: 319, name: "", img: "images/Rare/Celebrations/Uni319_s00.png" },
      { id: 329, name: "", img: "images/Rare/Celebrations/Uni329_s00.webp" },
      { id: 343, name: "", img: "images/Rare/Celebrations/Uni343_c00.webp" },
      { id: 501, name: "", img: "images/Rare/Celebrations/Uni501_c00.png" },
      { id: 695, name: "", img: "images/Rare/Celebrations/Uni695_c00.png" },
      { id: 785, name: "", img: "images/Rare/Celebrations/Uni785_c00.webp" },
      { id: 852, name: "", img: "images/Rare/Celebrations/Uni852_c00.webp" },
    ],
    "Collaboration": [
      //Princess Punt Sweets Collaboration Event//
      { id: 64, name: "", img: "images/Rare/Collaboration/Uni064_c00.webp" },
      { id: 65, name: "", img: "images/Rare/Collaboration/Uni065_c00.webp" },
      { id: 67, name: "", img: "images/Rare/Collaboration/Uni067_s00.webp" },

      //Merc Storia Collaboration Event//
      { id: 110, name: "", img: "images/Rare/Collaboration/Uni110_c00.webp" },
      { id: 111, name: "", img: "images/Rare/Collaboration/Uni111_s00.webp" },
      { id: 112, name: "", img: "images/Rare/Collaboration/Uni112_c00.webp" },
      { id: 113, name: "", img: "images/Rare/Collaboration/Uni113_c00.png" },
      { id: 114, name: "", img: "images/Rare/Collaboration/Uni114_c00.webp" },
      { id: 115, name: "", img: "images/Rare/Collaboration/Uni115_c00.webp" },
      { id: 116, name: "", img: "images/Rare/Collaboration/Uni116_c00.webp" },

      //Shoumetsu Toshi Collaboration Event//
      { id: 179, name: "", img: "images/Rare/Collaboration/Uni179_s00.webp" },
      { id: 340, name: "", img: "images/Rare/Collaboration/Uni340_s00.webp" },
      { id: 483, name: "", img: "images/Rare/Collaboration/Uni483_c00.png" },
      { id: 428, name: "", img: "images/Rare/Collaboration/Uni428_c00.png" },

      //Metal Slug Collaboration Event//
      { id: 214, name: "", img: "images/Rare/Collaboration/Uni214_c00.png" },
      { id: 215, name: "", img: "images/Rare/Collaboration/Uni215_c00.png" },
      { id: 216, name: "", img: "images/Rare/Collaboration/Uni216_c00.png" },
      { id: 217, name: "", img: "images/Rare/Collaboration/Uni217_c00.png" },
      { id: 218, name: "", img: "images/Rare/Collaboration/Uni218_c00.png" },
      { id: 221, name: "", img: "images/Rare/Collaboration/Uni221_c00.png" },


      { id: 277, name: "", img: "images/Rare/Collaboration/Uni277_c00.png" },

      //Puella Magi Madoka Magica Collaboration Event//
      { id: 299, name: "", img: "images/Rare/Collaboration/Uni299_s00.png" },
      { id: 301, name: "", img: "images/Rare/Collaboration/Uni301_c00.webp" },
      { id: 294, name: "", img: "images/Rare/Collaboration/Uni294_c00.webp" },
      { id: 295, name: "", img: "images/Rare/Collaboration/Uni295_c00.webp" },
      { id: 296, name: "", img: "images/Rare/Collaboration/Uni296_c00.webp" },
      { id: 297, name: "", img: "images/Rare/Collaboration/Uni297_c00.webp" },
      { id: 298, name: "", img: "images/Rare/Collaboration/Uni298_c00.webp" },


      { id: 315, name: "", img: "images/Rare/Collaboration/Uni315_c00.webp" },

      //Fate/Stay Night: Heaven's Feel Collaboration Event//
      { id: 373, name: "", img: "images/Rare/Collaboration/Uni373_c00.webp" },
      { id: 370, name: "", img: "images/Rare/Collaboration/Uni370_s00.webp" },
      { id: 371, name: "", img: "images/Rare/Collaboration/Uni371_c00.webp" },
      { id: 372, name: "", img: "images/Rare/Collaboration/Uni372_c00.webp" },
      { id: 458, name: "", img: "images/Rare/Collaboration/Uni458_c00.webp" },
      { id: 459, name: "", img: "images/Rare/Collaboration/Uni459_c00.webp" },

      //Power Pro Baseball Collaboration Event//
      { id: 385, name: "", img: "images/Rare/Collaboration/Uni385_s00.png" },
      { id: 386, name: "", img: "images/Rare/Collaboration/Uni386_c00.png" },
      { id: 387, name: "", img: "images/Rare/Collaboration/Uni387_c00.png" },
      { id: 388, name: "", img: "images/Rare/Collaboration/Uni388_c00.png" },
      { id: 389, name: "", img: "images/Rare/Collaboration/Uni389_c00.png" },


      { id: 399, name: "", img: "images/Rare/Collaboration/Uni399_c00.webp" },

      //Neon Genesis Evangelion Collaboration Event//
      { id: 402, name: "", img: "images/Rare/Collaboration/Uni402_s00.png" },
      { id: 404, name: "", img: "images/Rare/Collaboration/Uni404_c00.png" },
      { id: 406, name: "", img: "images/Rare/Collaboration/Uni406_c00.png" },
      { id: 407, name: "", img: "images/Rare/Collaboration/Uni407_c00.png" },
      { id: 408, name: "", img: "images/Rare/Collaboration/Uni408_c00.png" },
      { id: 552, name: "", img: "images/Rare/Collaboration/Uni552_c00.png" },


      { id: 419, name: "", img: "images/Rare/Collaboration/Uni419_c00.png" },
      { id: 420, name: "", img: "images/Rare/Collaboration/Uni420_c00.png" },
      { id: 421, name: "", img: "images/Rare/Collaboration/Uni421_c00.png" },
      { id: 432, name: "", img: "images/Rare/Collaboration/Uni432_c00.png" },
      { id: 473, name: "", img: "images/Rare/Collaboration/Uni473_s00.png" },

      //Street Fighter Collaboration Event//
      { id: 508, name: "", img: "images/Rare/Collaboration/Uni508_c00.png" },
      { id: 518, name: "", img: "images/Rare/Collaboration/Uni518_c00.png" },
      { id: 577, name: "", img: "images/Rare/Collaboration/Uni577_c00.png" },
      { id: 578, name: "", img: "images/Rare/Collaboration/Uni578_c00.png" },
      { id: 579, name: "", img: "images/Rare/Collaboration/Uni579_c00.png" },
      { id: 580, name: "", img: "images/Rare/Collaboration/Uni580_c00.png" },
      //Hatsune Miku Collaboration Event//
      { id: 538, name: "", img: "images/Rare/Collaboration/Uni538_c00.png" },
      { id: 562, name: "", img: "images/Rare/Collaboration/Uni562_c00.png" },
      { id: 592, name: "", img: "images/Rare/Collaboration/Uni592_c00.png" },
      { id: 593, name: "", img: "images/Rare/Collaboration/Uni593_c00.png" },

      { id: 604, name: "", img: "images/Rare/Collaboration/Uni604_c00.png" },
      { id: 605, name: "", img: "images/Rare/Collaboration/Uni605_c00.png" },

      { id: 611, name: "", img: "images/Rare/Collaboration/Uni611_c00.png" },
      { id: 677, name: "", img: "images/Rare/Collaboration/Uni677_c00.png" },
      { id: 678, name: "", img: "images/Rare/Collaboration/Uni678_c00.png" },
      { id: 742, name: "", img: "images/Rare/Collaboration/Uni742_c00.webp" },
      { id: 743, name: "", img: "images/Rare/Collaboration/Uni743_c00.png" },
      { id: 752, name: "", img: "images/Rare/Collaboration/Uni752_c00.webp" },
      { id: 807, name: "", img: "images/Rare/Collaboration/Uni807_c00.png" },
      { id: 809, name: "", img: "images/Rare/Collaboration/Uni809_c00.webp" },
      { id: 848, name: "", img: "images/Rare/Collaboration/Uni848_c00.webp" },
    ]
  },
    "Super Rare": {
        "Gacha": [
            { id: 32, name: "", img: "images/Super Rare/Gacha/Uni032_s00.png" },
            { id: 61, name: "", img: "images/Super Rare/Gacha/Uni061_s00.webp" },
            { id: 35, name: "", img: "images/Super Rare/Gacha/Uni035_s00.png" },
            { id: 33, name: "", img: "images/Super Rare/Gacha/Uni033_s00.png" },
            { id: 39, name: "", img: "images/Super Rare/Gacha/Uni039_s00.png" },
            { id: 36, name: "", img: "images/Super Rare/Gacha/Uni036_s00.webp" },
            { id: 40, name: "", img: "images/Super Rare/Gacha/Uni040_s00.png" },
            { id: 31, name: "", img: "images/Super Rare/Gacha/Uni031_s00.png" },
            { id: 30, name: "", img: "images/Super Rare/Gacha/Uni030_s00.png" },
            { id: 150, name: "", img: "images/Super Rare/Gacha/Uni150_s00.png" },
            { id: 151, name: "", img: "images/Super Rare/Gacha/Uni151_s00.png" },
            { id: 152, name: "", img: "images/Super Rare/Gacha/Uni152_s00.png" },
            { id: 153, name: "", img: "images/Super Rare/Gacha/Uni153_s00.png" },
            { id: 199, name: "", img: "images/Super Rare/Gacha/Uni199_s00.webp" },
            { id: 307, name: "", img: "images/Super Rare/Gacha/Uni307_s00.png" },
            { id: 377, name: "", img: "images/Super Rare/Gacha/Uni377_s00.png" },
            { id: 522, name: "", img: "images/Super Rare/Gacha/Uni522_s00.png" },
            { id: 129, name: "", img: "images/Super Rare/Gacha/Uni129_s00.png" },
            { id: 200, name: "", img: "images/Super Rare/Gacha/Uni200_c00.png" },
            { id: 131, name: "", img: "images/Super Rare/Gacha/Uni131_c00.png" },
            { id: 144, name: "", img: "images/Super Rare/Gacha/Uni144_s00.png" },
            { id: 237, name: "", img: "images/Super Rare/Gacha/Uni237_s00.png" },
            { id: 238, name: "", img: "images/Super Rare/Gacha/Uni238_s00.png" },
            { id: 239, name: "", img: "images/Super Rare/Gacha/Uni239_s00.png" },
            { id: 443, name: "", img: "images/Super Rare/Gacha/Uni443_s00.png" },
            { id: 444, name: "", img: "images/Super Rare/Gacha/Uni444_s00.png" },
            { id: 445, name: "", img: "images/Super Rare/Gacha/Uni445_s00.png" },
            { id: 446, name: "", img: "images/Super Rare/Gacha/Uni446_s00.png" },
            { id: 447, name: "", img: "images/Super Rare/Gacha/Uni447_s00.png" },
        ],
        "Seasonal": [
            //Gacha Super rare cats//
            { id: 314, name: "", img: "images/Super Rare/Seasonal/Uni314_s00.png" },
            { id: 589, name: "", img: "images/Super Rare/Seasonal/Uni589_s00.png" },
            { id: 332, name: "", img: "images/Super Rare/Seasonal/Uni332_s00.png" },
            { id: 276, name: "", img: "images/Super Rare/Seasonal/Uni276_s00.png" },
            { id: 565, name: "", img: "images/Super Rare/Seasonal/Uni565_s00.png" },
            { id: 566, name: "", img: "images/Super Rare/Seasonal/Uni566_s00.png" },
            { id: 228, name: "", img: "images/Super Rare/Seasonal/Uni228_s00.png" },
            { id: 773, name: "", img: "images/Super Rare/Seasonal/Uni773_c00.webp" },
            { id: 520, name: "", img: "images/Super Rare/Seasonal/Uni520_c00.png" },
            //Brainwash cats//
            { id: 629, name: "", img: "images/Super Rare/Seasonal/Uni629_s00.webp" },
            { id: 636, name: "", img: "images/Super Rare/Seasonal/Uni636_s00.webp" },
            { id: 645, name: "", img: "images/Super Rare/Seasonal/Uni645_s00.webp" },
            { id: 654, name: "", img: "images/Super Rare/Seasonal/Uni654_s00.webp" },
            { id: 662, name: "", img: "images/Super Rare/Seasonal/Uni662_s00.webp" },
            { id: 667, name: "", img: "images/Super Rare/Seasonal/Uni667_s00.webp" },
            { id: 684, name: "", img: "images/Super Rare/Seasonal/Uni684_s00.webp" },
            { id: 688, name: "", img: "images/Super Rare/Seasonal/Uni688_s00.webp" },
            { id: 694, name: "", img: "images/Super Rare/Seasonal/Uni694_s00.webp" },
        ],
        "Rewards": [
            { id: 91, name: "", img: "images/Super Rare/Rewards/Uni091_s00.png" },
            { id: 92, name: "", img: "images/Super Rare/Rewards/Uni092_s00.png" },
            { id: 93, name: "", img: "images/Super Rare/Rewards/Uni093_s00.png" },
            { id: 94, name: "", img: "images/Super Rare/Rewards/Uni094_s00.png" },
            { id: 95, name: "", img: "images/Super Rare/Rewards/Uni095_s00.png" },
            { id: 96, name: "", img: "images/Super Rare/Rewards/Uni096_s00.png" },
            { id: 97, name: "", img: "images/Super Rare/Rewards/Uni097_s00.png" },
            { id: 98, name: "", img: "images/Super Rare/Rewards/Uni098_s00.png" },
            { id: 99, name: "", img: "images/Super Rare/Rewards/Uni099_s00.png" },
            { id: 260, name: "", img: "images/Super Rare/Rewards/Uni260_s00.png" },
            { id: 267, name: "", img: "images/Super Rare/Rewards/Uni267_s00.webp" },
            { id: 284, name: "", img: "images/Super Rare/Rewards/Uni284_s00.webp" },
            { id: 273, name: "", img: "images/Super Rare/Rewards/Uni273_s00.png" },
            { id: 287, name: "", img: "images/Super Rare/Rewards/Uni287_s00.png" },
            { id: 706, name: "", img: "images/Super Rare/Rewards/Uni706_s00.webp" },
            { id: 716, name: "", img: "images/Super Rare/Rewards/Uni716_s00.webp" },
        ],
        "Collaboration": [
          //abc//
            { id: 69, name: "", img: "images/Super Rare/Collaborations/Uni069_s00.png" },
            { id: 68, name: "", img: "images/Super Rare/Collaborations/Uni068_s00.png" },
            { id: 160, name: "", img: "images/Super Rare/Collaborations/Uni160_s00.webp" },
            { id: 486, name: "", img: "images/Super Rare/Collaborations/Uni486_c00.webp" },

            { id: 117, name: "", img: "images/Super Rare/Collaborations/Uni117_c00.webp" },
            { id: 118, name: "", img: "images/Super Rare/Collaborations/Uni118_c00.webp" },
            { id: 189, name: "", img: "images/Super Rare/Collaborations/Uni189_c00.webp" },
            { id: 190, name: "", img: "images/Super Rare/Collaborations/Uni190_c00.webp" },
            { id: 344, name: "", img: "images/Super Rare/Collaborations/Uni344_s00.png" },

            { id: 173, name: "", img: "images/Super Rare/Collaborations/Uni173_s00.png" },

            { id: 429, name: "", img: "images/Super Rare/Collaborations/Uni429_c00.png" },

            { id: 219, name: "", img: "images/Super Rare/Collaborations/Uni219_c00.png" },
            { id: 220, name: "", img: "images/Super Rare/Collaborations/Uni220_c00.png" },
            { id: 293, name: "", img: "images/Super Rare/Collaborations/Uni293_c00.webp" },
            { id: 327, name: "", img: "images/Super Rare/Collaborations/Uni327_c00.png" },
            { id: 460, name: "", img: "images/Super Rare/Collaborations/Uni460_c00.webp" },


            { id: 390, name: "", img: "images/Super Rare/Collaborations/Uni390_s00.png" },
            { id: 391, name: "", img: "images/Super Rare/Collaborations/Uni391_s00.png" },
            { id: 392, name: "", img: "images/Super Rare/Collaborations/Uni392_s00.png" },
            { id: 409, name: "", img: "images/Super Rare/Collaborations/Uni409_s00.webp" },
            { id: 410, name: "", img: "images/Super Rare/Collaborations/Uni410_s00.png" },
            { id: 411, name: "", img: "images/Super Rare/Collaborations/Uni411_c00.png" },
            { id: 489, name: "", img: "images/Super Rare/Collaborations/Uni489_c00.png" },
            { id: 490, name: "", img: "images/Super Rare/Collaborations/Uni490_c00.png" },
            { id: 491, name: "", img: "images/Super Rare/Collaborations/Uni491_c00.png" },

            { id: 429, name: "", img: "images/Super Rare/Collaborations/Uni429_c00.png" },
            { id: 472, name: "", img: "images/Super Rare/Collaborations/Uni472_s00.webp" },
            { id: 556, name: "", img: "images/Super Rare/Collaborations/Uni556_s00.png" },
            { id: 576, name: "", img: "images/Super Rare/Collaborations/Uni576_c00.png" },
            { id: 828, name: "", img: "images/Super Rare/Collaborations/Uni828_c00.webp"},
            { id: 829, name: "", img: "images/Super Rare/Collaborations/Uni829_c00.webp"},

            { id: 561, name: "", img: "images/Super Rare/Collaborations/Uni561_c00.png" },
            { id: 591, name: "", img: "images/Super Rare/Collaborations/Uni591_c00.png" },
            { id: 601, name: "", img: "images/Super Rare/Collaborations/Uni601_c00.png" },
            { id: 602, name: "", img: "images/Super Rare/Collaborations/Uni602_c00.png" },
            { id: 603, name: "", img: "images/Super Rare/Collaborations/Uni603_c00.png" },
            { id: 672, name: "", img: "images/Super Rare/Collaborations/Uni672_c00.png" },
            { id: 750, name: "", img: "images/Super Rare/Collaborations/Uni750_c00.webp" },
            { id: 751, name: "", img: "images/Super Rare/Collaborations/Uni751_c00.webp" },
            { id: 794, name: "", img: "images/Super Rare/Collaborations/Uni794_c00.webp" },
            { id: 847, name: "", img: "images/Super Rare/Collaborations/Uni847_c00.webp" },
        ],
      },
    "Uber Rare": {
        "The Dynamites": [
            { id: 42, name: "", img: "images/Uber rare/The Dynamites/Uni042_s00.png" },
            { id: 43, name: "", img: "images/Uber rare/The Dynamites/Uni043_s00.png" },
            { id: 44, name: "", img: "images/Uber rare/The Dynamites/Uni044_s00.png" },
            { id: 57, name: "", img: "images/Uber rare/The Dynamites/Uni057_s00.png" },
            { id: 59, name: "", img: "images/Uber rare/The Dynamites/Uni059_u00.webp" },
            { id: 143, name: "", img: "images/Uber rare/The Dynamites/Uni143_s00.png" },
            { id: 427, name: "", img: "images/Uber rare/The Dynamites/Uni427_s00.png" },
            { id: 519, name: "", img: "images/Uber rare/The Dynamites/Uni519_s00.png" },
            { id: 617, name: "", img: "images/Uber rare/The Dynamites/Uni617_s00.webp" },
            { id: 668, name: "", img: "images/Uber rare/The Dynamites/Uni668_s00.webp" },
            { id: 763, name: "", img: "images/Uber rare/The Dynamites/Uni763_c00.webp" },
        ],
        "Tales of the Nekoluga": [
            { id: 34, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni034_s00.png" },
            { id: 168, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni168_s00.png" },
            { id: 169, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni169_s00.png" },
            { id: 170, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni170_s00.png" },
            { id: 171, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni171_s00.webp" },
            { id: 240, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni240_s00.png" },
            { id: 436, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni436_s00.png" },
            { id: 546, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni546_s00.png" },
            { id: 625, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni625_s00.webp" },
            { id: 712, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni712_s00.png" },
            { id: 781, name: "", img: "images/Uber rare/Tale of The Nekoluga/Uni781_c00.webp" },
        ],
        "Sengoku Wargods Vajiras": [
            { id: 71, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni071_s00.png" },
            { id: 72, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni072_s00.png" },
            { id: 73, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni073_u00.webp" },
            { id: 124, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni124_s00.png" },
            { id: 125, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni125_s00.png" },
            { id: 158, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni158_u00.webp" },
            { id: 338, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni338_s00.png" },
            { id: 486, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni496_s00.png" },
            { id: 618, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni618_s00.png" },
            { id: 649, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni649_s00.webp" },
            { id: 754, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni754_c00.webp" },
            { id: 850, name: "", img: "images/Uber rare/Sengoku Wargods Vajiras/Uni850_c00.webp" },
        ],
        "Cyber Academy Galxy Gals": [
            { id: 75, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni075_u00.webp" },
            { id: 76, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni076_u00.webp" },
            { id: 105, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni105_s00.png" },
            { id: 106, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni106_s00.png" },
            { id: 107, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni107_s00.png" },
            { id: 159, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni159_s00.webp" },
            { id: 351, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni351_s00.webp" },
            { id: 502, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni502_s00.png" },
            { id: 619, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni619_s00.png" },
            { id: 647, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni647_s00.webp" },
            { id: 733, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni733_c00.webp" },
            { id: 830, name: "", img: "images/Uber rare/Cyber Academy Galxy Gals/Uni830_c00.webp" },
        ],
        "Lords Of Destruction Dragon Emperors": [
            { id: 83, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni083_s00.png" },
            { id: 84, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni084_s00.png" },
            { id: 85, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni085_s00.png" },
            { id: 86, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni086_s00.png" },
            { id: 87, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni087_s00.png" },
            { id: 177, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni177_u00.png" },
            { id: 396, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni396_s00.png" },
            { id: 505, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni505_s00.png" },
            { id: 620, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni620_s00.webp" },
            { id: 660, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni660_s00.webp" },
            { id: 760, name: "", img: "images/Uber rare/Lords Of Destruction Dragon Emperors/Uni760_c00.webp" },
        ],
        "Acient Heroes Ultra Souls": [
            { id: 134, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni134_s00.png" },
            { id: 135, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni135_u00.webp" },
            { id: 136, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni136_s00.png" },
            { id: 137, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni137_u00.webp" },
            { id: 138, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni138_u00.webp" },
            { id: 203, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni203_s00.png" },
            { id: 322, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni322_s00.webp" },
            { id: 525, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni525_s00.png" },
            { id: 633, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni633_s00.webp" },
            { id: 692, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni692_s00.webp" },
            { id: 769, name: "", img: "images/Uber rare/Acient Heroes Ultra Souls/Uni769_c00.webp" },
        ],
        "Dark Heroes": [
            { id: 194, name: "", img: "images/Uber rare/Dark Heroes/Uni194_s00.png" },
            { id: 195, name: "", img: "images/Uber rare/Dark Heroes/Uni195_s00.png" },
            { id: 196, name: "", img: "images/Uber rare/Dark Heroes/Uni196_s00.png" },
            { id: 212, name: "", img: "images/Uber rare/Dark Heroes/Uni212_u00.webp" },
            { id: 226, name: "", img: "images/Uber rare/Dark Heroes/Uni226_s00.webp" },
            { id: 261, name: "", img: "images/Uber rare/Dark Heroes/Uni261_s00.png" },
            { id: 431, name: "", img: "images/Uber rare/Dark Heroes/Uni431_u00.webp" },
            { id: 533, name: "", img: "images/Uber rare/Dark Heroes/Uni533_s00.png" },
            { id: 634, name: "", img: "images/Uber rare/Dark Heroes/Uni634_s00.webp" },
            { id: 698, name: "", img: "images/Uber rare/Dark Heroes/Uni698_s00.webp" },
            { id: 774, name: "", img: "images/Uber rare/Dark Heroes/Uni774_c00.webp" },
        ],
        "The Almighties": [
            { id: 257, name: "", img: "images/Uber rare/The Almighties/Uni257_s00.png" },
            { id: 258, name: "", img: "images/Uber rare/The Almighties/Uni258_s00.png" },
            { id: 259, name: "", img: "images/Uber rare/The Almighties/Uni259_s00.png" },
            { id: 271, name: "", img: "images/Uber rare/The Almighties/Uni271_s00.png" },
            { id: 272, name: "", img: "images/Uber rare/The Almighties/Uni272_s00.png" },
            { id: 316, name: "", img: "images/Uber rare/The Almighties/Uni316_s00.png" },
            { id: 439, name: "", img: "images/Uber rare/The Almighties/Uni439_s00.png" },
            { id: 534, name: "", img: "images/Uber rare/The Almighties/Uni534_s00.png" },
            { id: 642, name: "", img: "images/Uber rare/The Almighties/Uni642_s00.png" },
            { id: 723, name: "", img: "images/Uber rare/The Almighties/Uni723_s00.webp" },
            { id: 811, name: "", img: "images/Uber rare/The Almighties/Uni811_c00.webp" },
        ],
        "Frontline Assoult Iron Legion": [
            { id: 304, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni304_u00.webp" },
            { id: 305, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni305_u00.webp" },
            { id: 306, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni306_u00.webp" },
            { id: 355, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni355_s00.png" },
            { id: 417, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni417_s00.png" },
            { id: 594, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni594_s00.png" },
            { id: 632, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni632_s00.png" },
            { id: 674, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni674_s00.webp" },
            { id: 715, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni715_s00.webp" },
            { id: 799, name: "", img: "images/Uber rare/Frontline Assoult Iron Legion/Uni799_c00.webp" },
        ],
        "Girls & Monsters: Angels of Terror": [
            { id: 334, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni334_s00.png" },
            { id: 335, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni335_s00.png" },
            { id: 336, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni336_s00.png" },
            { id: 357, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni357_s00.png" },
            { id: 358, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni358_s00.png" },
            { id: 607, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni607_s00.png" },
            { id: 682, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni682_s00.png" },
            { id: 725, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni725_c00.webp" },
            { id: 824, name: "", img: "images/Uber rare/Girls & Monsters Angels of Terror/Uni824_c00.webp" },
        ],
        "Nature's Guardians Elemental Pixies": [
            { id: 359, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni359_u00.webp" },
            { id: 360, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni360_u00.webp" },
            { id: 361, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni361_u00.webp" },
            { id: 401, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni401_s00.png" },
            { id: 569, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni569_s00.png" },
            { id: 631, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni631_s00.png" },
            { id: 655, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni655_s00.png" },
            { id: 719, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni719_c00.webp" },
            { id: 817, name: "", img: "images/Uber rare/Nature's Guardians Elemental Pixies/Uni817_c00.webp" },
        ],
        "Seasonal": [
          //Valentine Gals//
            { id: 587, name: "", img: "images/Uber rare/Seasonal/Uni587_c00.png" },
            { id: 588, name: "", img: "images/Uber rare/Seasonal/Uni588_c00.png" },
            { id: 644, name: "", img: "images/Uber rare/Seasonal/Uni644_s00.png" },

          //White Day Capsules//
            { id: 648, name: "", img: "images/Uber rare/Seasonal/Uni648_c00.png" },
            { id: 693, name: "", img: "images/Uber rare/Seasonal/Uni693_c00.png" },
            { id: 736, name: "", img: "images/Uber rare/Seasonal/Uni736_c00.webp" },
            { id: 786, name: "", img: "images/Uber rare/Seasonal/Uni786_c00.webp" },

          //Easter Carnival//
            { id: 330, name: "", img: "images/Uber rare/Seasonal/Uni330_s00.png" },
            { id: 331, name: "", img: "images/Uber rare/Seasonal/Uni331_s00.png" },
            { id: 595, name: "", img: "images/Uber rare/Seasonal/Uni595_s00.png" },
            { id: 699, name: "", img: "images/Uber rare/Seasonal/Uni699_c00.webp" },
            { id: 737, name: "", img: "images/Uber rare/Seasonal/Uni737_c00.webp" },

          //June Bride//
            { id: 661, name: "", img: "images/Uber rare/Seasonal/Uni661_c00.png" },
            { id: 711, name: "", img: "images/Uber rare/Seasonal/Uni711_c00.webp" },
            { id: 756, name: "", img: "images/Uber rare/Seasonal/Uni756_c00.webp" },

          //Gals of Summer Sunshine//
            { id: 354, name: "", img: "images/Uber rare/Seasonal/Uni354_c00.webp" },
            { id: 438, name: "", img: "images/Uber rare/Seasonal/Uni438_c00.png" },
            { id: 494, name: "", img: "images/Uber rare/Seasonal/Uni494_c00.png" },
            { id: 564, name: "", img: "images/Uber rare/Seasonal/Uni564_s00.png" },
            { id: 714, name: "", img: "images/Uber rare/Seasonal/Uni714_c00.webp" },
            { id: 820, name: "", img: "images/Uber rare/Seasonal/Uni820_c00.webp" },

          //Gals of Summer Blue Ocean//
            { id: 274, name: "", img: "images/Uber rare/Seasonal/Uni274_c00.png" },
            { id: 275, name: "", img: "images/Uber rare/Seasonal/Uni275_s00.webp" },
            { id: 563, name: "", img: "images/Uber rare/Seasonal/Uni563_s00.png" },
            { id: 614, name: "", img: "images/Uber rare/Seasonal/Uni614_s00.png" },
            { id: 666, name: "", img: "images/Uber rare/Seasonal/Uni666_c00.png" },
            { id: 759, name: "", img: "images/Uber rare/Seasonal/Uni759_c00.webp" },

          //Halloween Capsules//
            { id: 229, name: "", img: "images/Uber rare/Seasonal/Uni229_c00.png" },
            { id: 230, name: "", img: "images/Uber rare/Seasonal/Uni230_c00.webp" },
            { id: 302, name: "", img: "images/Uber rare/Seasonal/Uni302_s00.png" },
            { id: 570, name: "", img: "images/Uber rare/Seasonal/Uni570_s00.png" },
            { id: 683, name: "", img: "images/Uber rare/Seasonal/Uni683_s00.webp" },
            { id: 772, name: "", img: "images/Uber rare/Seasonal/Uni772_c00.webp" },

          //Xmas Gals//
            { id: 241, name: "", img: "images/Uber rare/Seasonal/Uni241_s00.webp" },
            { id: 242, name: "", img: "images/Uber rare/Seasonal/Uni242_c00.png" },
            { id: 243, name: "", img: "images/Uber rare/Seasonal/Uni243_c00.png" },
            { id: 310, name: "", img: "images/Uber rare/Seasonal/Uni310_s00.png" },
            { id: 526, name: "", img: "images/Uber rare/Seasonal/Uni526_c00.png" },
            { id: 584, name: "", img: "images/Uber rare/Seasonal/Uni584_s00.png" },
            { id: 687, name: "", img: "images/Uber rare/Seasonal/Uni687_c00.png" },
            { id: 777, name: "", img: "images/Uber rare/Seasonal/Uni777_c00.webp" },
      ],
        "Busters": [
            { id: 283, name: "", img: "images/Uber rare/Busters/Uni283_s00.png" },
            { id: 286, name: "", img: "images/Uber rare/Busters/Uni286_s00.png" },
            { id: 397, name: "", img: "images/Uber rare/Busters/Uni397_u00.webp" },
            { id: 559, name: "", img: "images/Uber rare/Busters/Uni559_s00.webp" },
            { id: 686, name: "", img: "images/Uber rare/Busters/Uni686_c00.png" },
                    
        ],
        "Festival": [
          //SUPERFEST//
            { id: 269, name: "", img: "images/Uber rare/Festival/Uni269_c00.png" },
            { id: 318, name: "", img: "images/Uber rare/Festival/Uni318_c00.png" },
            { id: 380, name: "", img: "images/Uber rare/Festival/Uni380_c00.webp" },
            { id: 529, name: "", img: "images/Uber rare/Festival/Uni529_c00.png" },
            { id: 585, name: "", img: "images/Uber rare/Festival/Uni585_c00.png" },
            { id: 641, name: "", img: "images/Uber rare/Festival/Uni641_c00.png" },
            { id: 690, name: "", img: "images/Uber rare/Festival/Uni690_c00.png" },
            { id: 779, name: "", img: "images/Uber rare/Festival/Uni779_c00.webp" },
            { id: 837, name: "", img: "images/Uber rare/Festival/Uni837_c00.webp" },

          //UBERFEST//
            { id: 333, name: "", img: "images/Uber rare/Festival/Uni333_c00.png" },
            { id: 378, name: "", img: "images/Uber rare/Festival/Uni378_c00.webp" },
            { id: 441, name: "", img: "images/Uber rare/Festival/Uni441_c00.png" },
            { id: 543, name: "", img: "images/Uber rare/Festival/Uni543_c00.png" },
            { id: 609, name: "", img: "images/Uber rare/Festival/Uni609_c00.png" },
            { id: 612, name: "", img: "images/Uber rare/Festival/Uni612_c00.png" },
            { id: 657, name: "", img: "images/Uber rare/Festival/Uni657_c00.png" },
            { id: 705, name: "", img: "images/Uber rare/Festival/Uni705_c00.png" },
            { id: 787, name: "", img: "images/Uber rare/Festival/Uni787_c00.webp" },

          //ROYALFEST//
            { id: 612, name: "", img: "images/Uber rare/Festival/Uni612_c00.png" },
        ],
        "Miscellaneous": [
            { id: 435, name: "Li'l Valkyrie", img: "images/Uber rare/Miscellaneous/Uni435_c00.png" },
            { id: 484, name: "Li'l Valkyrie Dark", img: "images/Uber rare/Miscellaneous/Uni484_c00.png" },
            { id: 758, name: "Trixi the Merc", img: "images/Uber rare/Miscellaneous/Uni758_c00.webp" },
            { id: 783, name: "Koneko", img: "images/Uber rare/Miscellaneous/Uni783_c00.webp" },
            { id: 810, name: "Agent Staal", img: "images/Uber rare/Miscellaneous/Uni810_c00.webp" },
            { id: 836, name: "Super Great Nyanko-Oh DX", img: "images/Uber rare/Miscellaneous/Uni836_c00.webp" },
        ],
        "Collaboration": [
          //Princess Punt Sweets Collaboration Event//
            { id: 66, name: "PPT48", img: "images/Uber rare/Collaboration/Uni066_s00.webp" },
            { id: 161, name: "Crazed Princess Punt", img: "images/Uber rare/Collaboration/Uni161_s00.webp" },
            { id: 337, name: "HMS Princess", img: "images/Uber rare/Collaboration/Uni337_s00.webp" },
            { id: 485, name: "Calette", img: "images/Uber rare/Collaboration/Uni485_c00.webp" },
            { id: 530, name: "Herme", img: "images/Uber rare/Collaboration/Uni530_c00.webp" },
          
          //Merc Storia Collaboration Event//
            { id: 119, name: "Wyvern", img: "images/Uber rare/Collaboration/Uni119_s00.webp" },
            { id: 185, name: "Hearscht", img: "images/Uber rare/Collaboration/Uni185_s00.webp" },
            { id: 186, name: "Cornelia", img: "images/Uber rare/Collaboration/Uni186_c00.webp" },
            { id: 187, name: "Juvens", img: "images/Uber rare/Collaboration/Uni187_s00.png" },
            { id: 188, name: "Mystica", img: "images/Uber rare/Collaboration/Uni188_s00.png" },
            { id: 345, name: "Michelia", img: "images/Uber rare/Collaboration/Uni345_s00.png" },
            { id: 346, name: "Todomeki", img: "images/Uber rare/Collaboration/Uni346_c00.webp" },
            { id: 506, name: "Eyewaltz", img: "images/Uber rare/Collaboration/Uni506_s00.png" },
            { id: 768, name: "Taitenki", img: "images/Uber rare/Collaboration/Uni768_c00.png" },

          //Survive! Mola Mola! Collaboration Event//
            { id: 174, name: "Mola King", img: "images/Uber rare/Collaboration/Uni174_s00.png" },
          
          //Shoumetsu Toshi Collaboration Event//
            { id: 180, name: "Mystery Girl Yuki", img: "images/Uber rare/Collaboration/Uni180_s00.webp" },
            { id: 270, name: "Crazed Yuki", img: "images/Uber rare/Collaboration/Uni270_s00.webp" },
            { id: 341, name: "Lost World Yuki", img: "images/Uber rare/Collaboration/Uni341_s00.webp" },
            { id: 482, name: "Benevolent Souma", img: "images/Uber rare/Collaboration/Uni482_s00.png" },

          //Metal Slug Collaboration Event//
            { id: 222, name: "HUGE HERMIT", img: "images/Uber rare/Collaboration/Uni222_s00.webp" },
            { id: 223, name: "JUPITER KING", img: "images/Uber rare/Collaboration/Uni223_s00.webp" },
            { id: 224, name: "DONALD MORDEN", img: "images/Uber rare/Collaboration/Uni224_s00.webp" },
            { id: 225, name: "HI-DO", img: "images/Uber rare/Collaboration/Uni225_s00.webp" },
            { id: 727, name: "SOL DAE ROKKER", img: "images/Uber rare/Collaboration/Uni727_c00.webp" },

          //Puella Magi Madoka Magica Collaboration Even//
            { id: 288, name: "Madoka Kaname", img: "images/Uber rare/Collaboration/Uni288_s00.webp" },
            { id: 289, name: "Homura Akemi", img: "images/Uber rare/Collaboration/Uni289_s00.webp" },
            { id: 290, name: "Sayaka Miki", img: "images/Uber rare/Collaboration/Uni290_c00.webp" },
            { id: 291, name: "Mami Tomo", img: "images/Uber rare/Collaboration/Uni291_c00.webp" },
            { id: 292, name: "Kyoko Sakura", img: "images/Uber rare/Collaboration/Uni292_c00.webp" },
            { id: 440, name: "Bebe", img: "images/Uber rare/Collaboration/Uni440_s00.webp" }, 
            { id: 778, name: "Madoka Cat & Homurar", img: "images/Uber rare/Collaboration/Uni778_c00.webp" },

          //Crash Fever Collaboration Event//
            { id: 326, name: "Mobius", img: "images/Uber rare/Collaboration/Uni326_c00.png" },

          //Fate/Stay Night: Heaven's Feel Collaboration Event//
            { id: 362, name: "Saber", img: "images/Uber rare/Collaboration/Uni362_s00.webp" },
            { id: 363, name: "Rin Tohsaka", img: "images/Uber rare/Collaboration/Uni363_c00.webp" },
            { id: 364, name: "Illyasviel", img: "images/Uber rare/Collaboration/Uni364_c00.webp" },
            { id: 365, name: "Archer", img: "images/Uber rare/Collaboration/Uni365_c00.webp" },
            { id: 366, name: "Lancer", img: "images/Uber rare/Collaboration/Uni366_c00.webp" },
            { id: 367, name: "Rider", img: "images/Uber rare/Collaboration/Uni367_c00.webp" },
            { id: 368, name: "Gilgamesh", img: "images/Uber rare/Collaboration/Uni368_c00.webp" },
            { id: 456, name: "Sakura Matou", img: "images/Uber rare/Collaboration/Uni456_s00.png" },

          //Power Pro Baseball Collaboration Event//
            { id: 393, name: "Saki Nijima", img: "images/Uber rare/Collaboration/Uni393_s00.png" },
            { id: 394, name: "Subaru Hoshi", img: "images/Uber rare/Collaboration/Uni394_s00.png" },
            { id: 395, name: "Miyabi Oyama", img: "images/Uber rare/Collaboration/Uni395_s00.png" },

          //Neon Genesis Evangelion Collaboration Event//
            { id: 412, name: "EVA Unit-00", img: "images/Uber rare/Collaboration/Uni412_c00.png" },
            { id: 413, name: "EVA Unit-01", img: "images/Uber rare/Collaboration/Uni413_s00.webp" },
            { id: 414, name: "EVA Unit-02", img: "images/Uber rare/Collaboration/Uni414_s00.png" },
            { id: 487, name: "EVA Unit-08", img: "images/Uber rare/Collaboration/Uni487_c00.png" },
            { id: 415, name: "Shinji Cat", img: "images/Uber rare/Collaboration/Uni415_c00.png" },
            { id: 416, name: "Moon Operators", img: "images/Uber rare/Collaboration/Uni416_c00.png" },
            { id: 488, name: "AAA Wunder", img: "images/Uber rare/Collaboration/Uni488_s00.webp" },
            { id: 547, name: "Night Oracle Rei", img: "images/Uber rare/Collaboration/Uni547_c00.png" },
            { id: 548, name: "The 4th Angel", img: "images/Uber rare/Collaboration/Uni548_c00.png" },
            { id: 549, name: "The 6th Angel", img: "images/Uber rare/Collaboration/Uni549_c00.png" },
            { id: 551, name: "The 9th Angel", img: "images/Uber rare/Collaboration/Uni551_c00.png" },
            { id: 550, name: "The 10th Angel", img: "images/Uber rare/Collaboration/Uni550_c00.png" },
            { id: 709, name: "One-Eyed Asuka", img: "images/Uber rare/Collaboration/Uni709_c00.webp" },
            { id: 710, name: "EVA Unit-13", img: "images/Uber rare/Collaboration/Uni710_c00.webp" },
            { id: 814, name: "Mass Production EVA", img: "images/Uber rare/Collaboration/Uni814_c00.webp" },

          //Bikkuriman Collaboration Event//
            { id: 467, name: "Super Zeus", img: "images/Uber rare/Collaboration/Uni467_s00.png" },
            { id: 468, name: "Holy Phoenix", img: "images/Uber rare/Collaboration/Uni468_s00.png" },
            { id: 469, name: "Super Devil", img: "images/Uber rare/Collaboration/Uni469_s00.png" },
            { id: 470, name: "Satanmaria", img: "images/Uber rare/Collaboration/Uni470_c00.png" },
            { id: 471, name: "Heracrist", img: "images/Uber rare/Collaboration/Uni471_s00.webp" },
            { id: 555, name: "Shaman Khan", img: "images/Uber rare/Collaboration/Uni555_c00.png" },
            { id: 762, name: "Heavenly God Super Zeus", img: "images/Uber rare/Collaboration/Uni762_c00.webp" },

          //Street Fighter Collaboration Event//
            { id: 511, name: "Ryu", img: "images/Uber rare/Collaboration/Uni511_s00.png" },
            { id: 512, name: "Chun-Li", img: "images/Uber rare/Collaboration/Uni512_c00.png" },
            { id: 513, name: "Guile", img: "images/Uber rare/Collaboration/Uni513_c00.png" },
            { id: 514, name: "Zangief", img: "images/Uber rare/Collaboration/Uni514_c00.png" },
            { id: 515, name: "Blanka", img: "images/Uber rare/Collaboration/Uni515_c00.png" },
            { id: 516, name: "Dhalsim", img: "images/Uber rare/Collaboration/Uni516_c00.png" },
            { id: 517, name: "Ken", img: "images/Uber rare/Collaboration/Uni517_s00.webp" },
            { id: 571, name: "E. Honda", img: "images/Uber rare/Collaboration/Uni571_c00.png" },
            { id: 572, name: "Balrog", img: "images/Uber rare/Collaboration/Uni572_c00.png" },
            { id: 573, name: "Vega", img: "images/Uber rare/Collaboration/Uni573_c00.png" },
            { id: 574, name: "Sagat", img: "images/Uber rare/Collaboration/Uni574_c00.png" },
            { id: 575, name: "M. Bison", img: "images/Uber rare/Collaboration/Uni575_c00.png" },
            { id: 680, name: "Sakura", img: "images/Uber rare/Collaboration/Uni680_c00.png" },
            { id: 681, name: "Luke", img: "images/Uber rare/Collaboration/Uni681_c00.png" },
            { id: 826, name: "Cammy", img: "images/Uber rare/Collaboration/Uni826_c00.webp" },
            { id: 827, name: "Juri", img: "images/Uber rare/Collaboration/Uni827_c00.webp" },

          //Hatsune Miku Collaboration Event//
            { id: 535, name: "Hatsune Miku", img: "images/Uber rare/Collaboration/Uni535_c00.png" },
            { id: 536, name: "Sakura Miku", img: "images/Uber rare/Collaboration/Uni536_c00.png" },
            { id: 537, name: "Kagamine Rin & Len", img: "images/Uber rare/Collaboration/Uni537_c00.png" },
            { id: 560, name: "Megurine Luka", img: "images/Uber rare/Collaboration/Uni560_c00.png" },
            { id: 582, name: "Hatsune Miku: MM2020 Osaka", img: "images/Uber rare/Collaboration/Uni582_c00.png" },
            { id: 583, name: "Hatsune Miku: MM2020 Tokyo", img: "images/Uber rare/Collaboration/Uni583_c00.png" },
            { id: 590, name: "Snow Miku 2021", img: "images/Uber rare/Collaboration/Uni590_c00.png" },
            { id: 722, name: "Hatsune Miku XVI", img: "images/Uber rare/Collaboration/Uni722_c00.webp" },

          //Ranma 1/2 Collaboration Event//
            { id: 596, name: "Ranma Saotome", img: "images/Uber rare/Collaboration/Uni596_c00.png" },
            { id: 597, name: "Akane Tendo", img: "images/Uber rare/Collaboration/Uni597_c00.png" },
            { id: 598, name: "Ryoga Hibiki", img: "images/Uber rare/Collaboration/Uni598_c00.png" },
            { id: 599, name: "Shampoo", img: "images/Uber rare/Collaboration/Uni599_c00.png" },
            { id: 600, name: "Mousse", img: "images/Uber rare/Collaboration/Uni600_c00.png" },
            { id: 671, name: "Ranma Saotome", img: "images/Uber rare/Collaboration/Uni671_c00.png" },

          // River City Ransom Collaboration Event//
            { id: 624, name: "Kunio-kun", img: "images/Uber rare/Collaboration/Uni624_c00.png" },
            { id: 721, name: "High School Kingpin Riki", img: "images/Uber rare/Collaboration/Uni721_c00.webp" },

          //Tower of Saviors Collaboration Event//
            { id: 741, name: "Voluptuous Peony - Daji", img: "images/Uber rare/Collaboration/Uni741_c00.webp" },

          //Rurouni Kenshin Collaboration Event//
            { id: 746, name: "Kenshin Himura", img: "images/Uber rare/Collaboration/Uni746_c00.webp" },
            { id: 747, name: "Sanosuke Sagara", img: "images/Uber rare/Collaboration/Uni747_c00.webp" },
            { id: 748, name: "Aoshi Shinomori", img: "images/Uber rare/Collaboration/Uni748_c00.webp" },
            { id: 749, name: "Hajime Saito", img: "images/Uber rare/Collaboration/Uni749_c00.webp" },

          //Baki Hanma Collaboration Event//
            { id: 789, name: "Baki Hanma", img: "images/Uber rare/Collaboration/Uni789_c00.webp" },
            { id: 790, name: "Retsu Kaioh", img: "images/Uber rare/Collaboration/Uni790_c00.webp" },
            { id: 791, name: "Kaoru Hanayama", img: "images/Uber rare/Collaboration/Uni791_c00.webp" },
            { id: 792, name: "Katsumi Orochi", img: "images/Uber rare/Collaboration/Uni792_c00.webp" },
            { id: 793, name: "Jack Hammer", img: "images/Uber rare/Collaboration/Uni793_c00.webp" },

          //Sonic the Hedgehog Collaboration Event//
            { id: 803, name: "Sonic", img: "images/Uber rare/Collaboration/Uni803_c00.webp" },
            { id: 804, name: "Tails", img: "images/Uber rare/Collaboration/Uni804_c00.webp" },
            { id: 805, name: "Knuckles", img: "images/Uber rare/Collaboration/Uni805_c00.webp" },
            { id: 806, name: "Shadow", img: "images/Uber rare/Collaboration/Uni806_c00.webp" },

          //Demon Slayer Collaboration Event//
            { id: 840, name: "Tanjiro Kamado", img: "images/Uber rare/Collaboration/Uni840_c00.webp" },
            { id: 841, name: "Nezuko Kamado", img: "images/Uber rare/Collaboration/Uni841_c00.webp" },
            { id: 842, name: "Zenitsu Agatsuma", img: "images/Uber rare/Collaboration/Uni842_c00.webp" },
            { id: 843, name: "Inosuke Hashibira", img: "images/Uber rare/Collaboration/Uni843_c00.webp" },
            { id: 844, name: "Giyu Tomioka", img: "images/Uber rare/Collaboration/Uni844_c00.webp" },
            { id: 845, name: "Shinobu Kocho", img: "images/Uber rare/Collaboration/Uni845_c00.webp" },
            { id: 846, name: "Kyojuro Rengoku", img: "images/Uber rare/Collaboration/Uni846_c00.webp" },     
        ],
    },
    "Legend Rare": {
        "Gacha": [
            { id: 448, name: "", img: "images/Legend Rare/Gacha/Uni448_s00.webp" },
            { id: 449, name: "", img: "images/Legend Rare/Gacha/Uni449_s00.webp" },
            { id: 450, name: "", img: "images/Legend Rare/Gacha/Uni450_s00.webp" },
            { id: 451, name: "", img: "images/Legend Rare/Gacha/Uni451_c00.png" },
            { id: 455, name: "", img: "images/Legend Rare/Gacha/Uni455_c00.webp" },
            { id: 461, name: "", img: "images/Legend Rare/Gacha/Uni461_c00.webp" },
            { id: 463, name: "", img: "images/Legend Rare/Gacha/Uni463_c00.webp" },
            { id: 478, name: "", img: "images/Legend Rare/Gacha/Uni478_c00.png" },
            { id: 481, name: "", img: "images/Legend Rare/Gacha/Uni481_c00.webp" },
            { id: 493, name: "", img: "images/Legend Rare/Gacha/Uni493_c00.png" },
            { id: 544, name: "", img: "images/Legend Rare/Gacha/Uni544_c00.png" }
      ],
        "Festival": [
            { id: 731, name: "", img: "images/Legend Rare/Festival/Uni731_c00.webp" },
            { id: 738, name: "", img: "images/Legend Rare/Festival/Uni738_c00.webp" },
            { id: 586, name: "", img: "images/Legend Rare/Festival/Uni586_c00.png" },
      ],
        "Collaboration": [
            { id: 466, name: "", img: "images/Legend Rare/Collaborations/Uni466_c00.png" },
            { id: 510, name: "", img: "images/Legend Rare/Collaborations/Uni510_c00.png" },
            { id: 815, name: "", img: "images/Legend Rare/Collaborations/Uni815_c00.webp" }
      ],
    }
  };

// placeholder for enemies dataset (fill in later when you add enemy images/ids)
const enemyData = {
  // example structure matching catData
  "Traitless": {
    "Story Enemies": [
      { id: 2, name: "Doge", img: "enemies/traitless/Enemy_icon_000.png" },
      { id: 3, name: "Snache", img: "enemies/traitless/Enemy_icon_001.png" },
      { id: 4, name: "Those Guys", img: "enemies/traitless/Enemy_icon_002.png" },
      { id: 5, name: "Hippoe", img: "enemies/traitless/Enemy_icon_003.png" },
      { id: 7, name: "Jackie Peng", img: "enemies/traitless/Enemy_icon_005.png" },
      { id: 8, name: "Gory", img: "enemies/traitless/Enemy_icon_006.png" },
      { id: 9, name: "Baa Baa", img: "enemies/traitless/Enemy_icon_007.png" },
      { id: 11, name: "Le'boin", img: "enemies/traitless/Enemy_icon_009.png" },
      { id: 12, name: "Kang Roo", img: "enemies/traitless/Enemy_icon_010.png" },
      { id: 14, name: "Teacher Bear", img: "enemies/traitless/Enemy_icon_012.png" },
      { id: 15, name: "Croco", img: "enemies/traitless/Enemy_icon_013.png" },
      { id: 17, name: "Squire Rel", img: "enemies/traitless/Enemy_icon_015.png" },
      { id: 23, name: "Ms. Sign", img: "enemies/traitless/Enemy_icon_021.webp" },
      { id: 33, name: "Master A.", img: "enemies/traitless/Enemy_icon_031.png" },
      { id: 34, name: "R.Ost", img: "enemies/traitless/Enemy_icon_032.png" },
      { id: 35, name: "Otta-smack-u", img: "enemies/traitless/Enemy_icon_033.png" },
      { id: 36, name: "Kory", img: "enemies/traitless/Enemy_icon_034.png" },
      { id: 37, name: "Camelle", img: "enemies/traitless/Enemy_icon_035.png" },
      { id: 38, name: "Duche", img: "enemies/traitless/Enemy_icon_036.png" },
      { id: 41, name: "THE SLOTH", img: "enemies/traitless/Enemy_icon_039.png" },
      { id: 42, name: "Rain D.", img: "enemies/traitless/Enemy_icon_040.png" },
      { id: 43, name: "Dagshund", img: "enemies/traitless/Enemy_icon_041.png" },
      { id: 44, name: "Celeboodle", img: "enemies/traitless/Enemy_icon_042.png" },
      { id: 45, name: "H. Nah", img: "enemies/traitless/Enemy_icon_043.png" },
      { id: 46, name: "Dober P.D", img: "enemies/traitless/Enemy_icon_044.png" },
      { id: 119, name: "Wall Doge", img: "enemies/traitless/Enemy_icon_117.png" },
      { id: 148, name: "Trolly Blogger", img: "enemies/traitless/Enemy_icon_146.png" },
      { id: 237, name: "Mr. Mole", img: "enemies/traitless/Enemy_icon_235.png" },
      { id: 268, name: "Henry", img: "enemies/traitless/Enemy_icon_266.png" },
      { id: 320, name: "Dolphina", img: "enemies/traitless/Enemy_icon_318.png" },
      { id: 357, name: "Croakley", img: "enemies/traitless/Enemy_icon_355.png" },
      { id: 448, name: "Final Boss Giga-God", img: "enemies/traitless/Enemy_icon_446.png" },
      { id: 540, name: "Bore Jr.", img: "enemies/traitless/Enemy_icon_538.png" },
      { id: 549, name: "Mr. Mer", img: "enemies/traitless/Enemy_icon_547.png" },
      { id: 605, name: "Wild Doge", img: "enemies/traitless/Enemy_icon_603.png" },
      { id: 610, name: "Li'l Doge", img: "enemies/traitless/Enemy_icon_608.png" },
      { id: 626, name: "Cumulus Gallus", img: "enemies/traitless/Enemy_icon_624.png" },
      { id: 643, name: "Elephantidae Papaou", img: "enemies/traitless/Enemy_icon_641.webp" },
      { id: 656, name: "Mega Baa Baa", img: "enemies/traitless/Enemy_icon_654.webp" },
      { id: 681, name: "Dogenstein", img: "enemies/traitless/Enemy_icon_679.webp" },
    ],
    "Event Enemies": [
      { id: 0, name: "", img: "" },

    ],
  }
};

// decide which dataset to render based on page filename
const data = location.pathname.includes('enemies') ? enemyData : catData;

const selectedCats = new Set();
const container = document.getElementById("cats-container");

for (const [rarity, categories] of Object.entries(data)) {
      const section = document.createElement("div");
      section.className = "rarity-section";
      section.innerHTML = `<h2>${rarity}</h2>`;

      const categoryNames = Object.keys(categories);
      const categoryButtons = document.createElement("div");
      categoryButtons.className = "category-buttons";
      section.appendChild(categoryButtons);

      // Store grid elements for toggling
      const grids = {};

      categoryNames.forEach(category => {
        // Create a container for the category button and select all button
        const categoryControl = document.createElement("div");
        categoryControl.className = "category-control";

        const btn = document.createElement("button");
        btn.textContent = category;
        btn.className = "category-btn";
        let isOpen = false;

        // Create grid for this category
        const grid = document.createElement("div");
        grid.className = "cat-grid";
        grid.style.display = "none"; // Hidden by default

        const catIds = [];
        categories[category].forEach(cat => {
          catIds.push(cat.id);
          const card = document.createElement("div");
          card.className = "cat-card";
          card.dataset.catId = cat.id;
          card.innerHTML = `
            <img src="${cat.img}" alt="${cat.name}">
            <div>${cat.name} (#${cat.id})</div>
          `;
          card.addEventListener("click", () => {
            card.classList.toggle("selected");
            if (selectedCats.has(cat.id)) {
              selectedCats.delete(cat.id);
            } else {
              selectedCats.add(cat.id);
            }
          });
          grid.appendChild(card);
        });

        btn.addEventListener("click", () => {
          isOpen = !isOpen;
          grid.style.display = isOpen ? "flex" : "none";
          selectAllBtn.style.display = isOpen ? "block" : "none";
          Object.entries(grids).forEach(([catName, g]) => {
            if (catName !== category) {
              g.style.display = "none";
            }
          });
          // Hide all other select all buttons
          document.querySelectorAll(".select-all-btn").forEach(btn => {
            if (btn !== selectAllBtn) {
              btn.style.display = "none";
            }
          });
        });

        // Create Select All button
        const selectAllBtn = document.createElement("button");
        selectAllBtn.textContent = "Select All";
        selectAllBtn.className = "select-all-btn";
        selectAllBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const cards = grid.querySelectorAll(".cat-card");
          const allSelected = Array.from(cards).every(c => c.classList.contains("selected"));
          
          cards.forEach(card => {
            const catId = parseInt(card.dataset.catId);
            if (allSelected) {
              // Deselect all
              card.classList.remove("selected");
              selectedCats.delete(catId);
            } else {
              // Select all
              card.classList.add("selected");
              selectedCats.add(catId);
            }
          });
          
          // Update button text
          const anySelected = Array.from(cards).some(c => c.classList.contains("selected"));
          selectAllBtn.textContent = anySelected ? "Deselect All" : "Select All";
        });

        categoryControl.appendChild(btn);
        categoryControl.appendChild(selectAllBtn);
        categoryButtons.appendChild(categoryControl);
        // Insert grid right after its button
        categoryButtons.appendChild(grid);
        grids[category] = grid;
      });

      container.appendChild(section);
    }

    function showSelected() {
      const ids = Array.from(selectedCats);
      const label = location.pathname.includes('enemies') ? 'enemy' : 'cat';
      document.getElementById("output").textContent = ids.length
        ? `Your ${label} ids: ${ids.join(' ')}`
        : `You haven't selected any ${label}s.`;
  
      // Remove old copy button if exists
  const oldBtn = document.getElementById("copy-ids-btn");
  if (oldBtn) oldBtn.remove();

  // Add copy button if there are ids
  if (ids.length) {
    const copyBtn = document.createElement("button");
    copyBtn.id = "copy-ids-btn";
    copyBtn.textContent = "Copy IDs";
    copyBtn.style.marginLeft = "10px";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(ids.join(' '));
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy IDs"), 1000);
    };
    output.appendChild(copyBtn);
  }
}

function clearSelected() {
  selectedCats.clear();
  document.querySelectorAll(".cat-card.selected").forEach(card => {
    card.classList.remove("selected");
  });
  document.getElementById("output").textContent = "You not picking any cats now...";
  const copyBtn = document.getElementById("copy-ids-btn");
  if (copyBtn) copyBtn.remove();
}