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
      { id: 2, name: "Doge", img: "enemies/traitless/Story Enemies/Enemy_icon_000.png" },
      { id: 3, name: "Snache", img: "enemies/traitless/Story Enemies/Enemy_icon_001.png" },
      { id: 4, name: "Those Guys", img: "enemies/traitless/Story Enemies/Enemy_icon_002.png" },
      { id: 5, name: "Hippoe", img: "enemies/traitless/Story Enemies/Enemy_icon_003.png" },
      { id: 7, name: "Jackie Peng", img: "enemies/traitless/Story Enemies/Enemy_icon_005.png" },
      { id: 8, name: "Gory", img: "enemies/traitless/Story Enemies/Enemy_icon_006.png" },
      { id: 9, name: "Baa Baa", img: "enemies/traitless/Story Enemies/Enemy_icon_007.png" },
      { id: 11, name: "Le'boin", img: "enemies/traitless/Story Enemies/Enemy_icon_009.png" },
      { id: 12, name: "Kang Roo", img: "enemies/traitless/Story Enemies/Enemy_icon_010.png" },
      { id: 14, name: "Teacher Bear", img: "enemies/traitless/Story Enemies/Enemy_icon_012.png" },
      { id: 15, name: "Croco", img: "enemies/traitless/Story Enemies/Enemy_icon_013.png" },
      { id: 17, name: "Squire Rel", img: "enemies/traitless/Story Enemies/Enemy_icon_015.png" },
      { id: 23, name: "Ms. Sign", img: "enemies/traitless/Story Enemies/Enemy_icon_021.webp" },
      { id: 33, name: "Master A.", img: "enemies/traitless/Story Enemies/Enemy_icon_031.png" },
      { id: 34, name: "R.Ost", img: "enemies/traitless/Story Enemies/Enemy_icon_032.png" },
      { id: 35, name: "Otta-smack-u", img: "enemies/traitless/Story Enemies/Enemy_icon_033.png" },
      { id: 36, name: "Kory", img: "enemies/traitless/Story Enemies/Enemy_icon_034.png" },
      { id: 37, name: "Camelle", img: "enemies/traitless/Story Enemies/Enemy_icon_035.png" },
      { id: 38, name: "Duche", img: "enemies/traitless/Story Enemies/Enemy_icon_036.png" },
      { id: 41, name: "THE SLOTH", img: "enemies/traitless/Story Enemies/Enemy_icon_039.png" },
      { id: 42, name: "Rain D.", img: "enemies/traitless/Story Enemies/Enemy_icon_040.png" },
      { id: 43, name: "Dagshund", img: "enemies/traitless/Story Enemies/Enemy_icon_041.png" },
      { id: 44, name: "Celeboodle", img: "enemies/traitless/Story Enemies/Enemy_icon_042.png" },
      { id: 45, name: "H. Nah", img: "enemies/traitless/Story Enemies/Enemy_icon_043.png" },
      { id: 46, name: "Dober P.D", img: "enemies/traitless/Story Enemies/Enemy_icon_044.png" },
      { id: 119, name: "Wall Doge", img: "enemies/traitless/Story Enemies/Enemy_icon_117.png" },
      { id: 148, name: "Trolly Blogger", img: "enemies/traitless/Story Enemies/Enemy_icon_146.png" },
      { id: 237, name: "Mr. Mole", img: "enemies/traitless/Story Enemies/Enemy_icon_235.png" },
      { id: 268, name: "Henry", img: "enemies/traitless/Story Enemies/Enemy_icon_266.png" },
      { id: 320, name: "Dolphina", img: "enemies/traitless/Story Enemies/Enemy_icon_318.png" },
      { id: 357, name: "Croakley", img: "enemies/traitless/Story Enemies/Enemy_icon_355.png" },
      { id: 448, name: "Final Boss Giga-God", img: "enemies/traitless/Story Enemies/Enemy_icon_446.png" },
      { id: 540, name: "Bore Jr.", img: "enemies/traitless/Story Enemies/Enemy_icon_538.png" },
      { id: 549, name: "Mr. Mer", img: "enemies/traitless/Story Enemies/Enemy_icon_547.png" },
      { id: 605, name: "Wild Doge", img: "enemies/traitless/Story Enemies/Enemy_icon_603.png" },
      { id: 610, name: "Li'l Doge", img: "enemies/traitless/Story Enemies/Enemy_icon_608.png" },
      { id: 626, name: "Cumulus Gallus", img: "enemies/traitless/Story Enemies/Enemy_icon_624.png" },
      { id: 643, name: "Elephantidae Papaou", img: "enemies/traitless/Story Enemies/Enemy_icon_641.webp" },
      { id: 656, name: "Mega Baa Baa", img: "enemies/traitless/Story Enemies/Enemy_icon_654.webp" },
      { id: 681, name: "Dogenstein", img: "enemies/traitless/Story Enemies/Enemy_icon_679.webp" },
    ],
    "Event Enemies": [
      { id: 64, name: "Chief Peng", img: "enemies/traitless/Event Enemies/Enemy_icon_062.png" },
      { id: 67, name: "Lione Hippoe", img: "enemies/traitless/Event Enemies/Enemy_icon_065.png" },
      { id: 68, name: "Lucky Sloth", img: "enemies/traitless/Event Enemies/Enemy_icon_066.png" },
      { id: 69, name: "Bears Be Bare", img: "enemies/traitless/Event Enemies/Enemy_icon_067.png" },
      { id: 86, name: "Teacher A", img: "enemies/traitless/Event Enemies/Enemy_icon_084.png" },
      { id: 101, name: "Sunny Celeboodle", img: "enemies/traitless/Event Enemies/Enemy_icon_099.png" },
      { id: 102, name: "Bearkini", img: "enemies/traitless/Event Enemies/Enemy_icon_100.png" },
      { id: 104, name: "Dashing Face", img: "enemies/traitless/Event Enemies/Enemy_icon_102.png" },
      { id: 108, name: "Fireworks Guys (High-Yield)", img: "enemies/traitless/Event Enemies/Enemy_icon_106.png" },
      { id: 109, name: "Fireworks Guys (Low-Yield)", img: "enemies/traitless/Event Enemies/Enemy_icon_107.png" },
      { id: 110, name: "Mighty Gui Zuli", img: "enemies/traitless/Event Enemies/Enemy_icon_108.png" },
      { id: 111, name: "Hermit Peng", img: "enemies/traitless/Event Enemies/Enemy_icon_109.png" },
      { id: 112, name: "Master Da Xun", img: "enemies/traitless/Event Enemies/Enemy_icon_110.png" },
      { id: 158, name: "Marching Kory", img: "enemies/traitless/Event Enemies/Enemy_icon_156.png" },
      { id: 264, name: "Ritual Drum Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_262.png" },
      { id: 265, name: "Festive Otter", img: "enemies/traitless/Event Enemies/Enemy_icon_263.png" },
      { id: 199, name: "Pumpkin Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_197.png" },
      { id: 259, name: "Candy DogeKing Wahwah", img: "enemies/traitless/Event Enemies/Enemy_icon_257.png" },
      { id: 283, name: "Festival Sign Girl", img: "enemies/traitless/Event Enemies/Enemy_icon_281.png" },
      { id: 284, name: "Vendor El", img: "enemies/traitless/Event Enemies/Enemy_icon_282.png" },
      { id: 308, name: "Le'mammoth", img: "enemies/traitless/Event Enemies/Enemy_icon_306.png" },
      { id: 309, name: "Ice Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_307.png" },
      { id: 333, name: "Easter Duche", img: "enemies/traitless/Event Enemies/Enemy_icon_331.png" },
      { id: 334, name: "Easter B.B.Bunny", img: "enemies/traitless/Event Enemies/Enemy_icon_332.png" },
      { id: 338, name: "Golden Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_336.png" },
      { id: 339, name: "Gold Hippoe", img: "enemies/traitless/Event Enemies/Enemy_icon_337.png" },
      { id: 358, name: "Gary Gory", img: "enemies/traitless/Event Enemies/Enemy_icon_356.png" },
      { id: 392, name: "Bang-Bang", img: "enemies/traitless/Event Enemies/Enemy_icon_390.png" },
      { id: 400, name: "Glowstick Guys", img: "enemies/traitless/Event Enemies/Enemy_icon_398.png" },
      { id: 444, name: "Ms. Madonna", img: "enemies/traitless/Event Enemies/Enemy_icon_442.png" },
      { id: 496, name: "Rat Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_494.png" },
      { id: 497, name: "Kappy Jr.", img: "enemies/traitless/Event Enemies/Enemy_icon_495.png" },
      { id: 516, name: "Doremi", img: "enemies/traitless/Event Enemies/Enemy_icon_514.png" },
      { id: 539, name: "Cow Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_537.png" },
      { id: 578, name: "Large White Ball", img: "enemies/traitless/Event Enemies/Enemy_icon_576.webp" },
      { id: 459, name: "Gummy Cat", img: "enemies/traitless/Event Enemies/Enemy_icon_457.png" },
      { id: 550, name: "Wafer Cat XL", img: "enemies/traitless/Event Enemies/Enemy_icon_548.png" },
      { id: 597, name: "Tiger Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_595.png" },
      { id: 582, name: "White Wind", img: "enemies/traitless/Event Enemies/Enemy_icon_580.png" },
      { id: 633, name: "Rabbit Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_631.png" },
      { id: 645, name: "Grand Mage Mimon", img: "enemies/traitless/Event Enemies/Enemy_icon_643.webp" },
      { id: 655, name: "Kappy Kawano", img: "enemies/traitless/Event Enemies/Enemy_icon_653.webp" },
      { id: 678, name: "Dragon Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_676.webp" },
      { id: 697, name: "Log", img: "enemies/traitless/Event Enemies/Enemy_icon_695.webp" },
      { id: 698, name: "Boulder", img: "enemies/traitless/Event Enemies/Enemy_icon_696.webp" },
      { id: 704, name: "Bannerman Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_702.webp" },
      { id: 713, name: "Snache Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_711.png" },
      { id: 738, name: "South Seas Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_736.webp" },
      { id: 739, name: "South Seas Otter", img: "enemies/traitless/Event Enemies/Enemy_icon_737.png" },
      { id: 743, name: "Whiskingmeister", img: "enemies/traitless/Event Enemies/Enemy_icon_741.png" },
      { id: 744, name: "Fireworks Gang", img: "enemies/traitless/Event Enemies/Enemy_icon_742.webp" },
      { id: 762, name: "Horse Doge", img: "enemies/traitless/Event Enemies/Enemy_icon_760.webp" },

    ],

    "Collaboration Enemies": [
      { id: 29, name: "Kerihime 1", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_027.png" },
      { id: 32, name: "Kerihime 2", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_030.webp" },
      { id: 28, name: "Li'l Gau (form 1)", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_026.png" },
      { id: 31, name: "Li'l Gau (form 2)", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_029.png" },
      { id: 27, name: "Swordsman (form 1)", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_025.png" },
      { id: 30, name: "Swordsman (form 2)", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_028.webp" },
      { id: 336, name: "Bridal Princess Punt", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_334.png" },
      { id: 337, name: "Oversleeping Beauty Punt", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_335.png" },
      { id: 465, name: "Judgment", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_463.png" },
      { id: 91, name: "Nono", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_089.png" },
      { id: 92, name: "Olga", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_090.png" },
      { id: 93, name: "Norn", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_091.png" },
      { id: 94, name: "Yoichi", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_092.png" },
      { id: 97, name: "Aura", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_095.png" },
      { id: 100, name: "Healer", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_098.png" },
      { id: 165, name: "Hearscht", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_163.png" },
      { id: 167, name: "Alois", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_165.png" },
      { id: 168, name: "Healer Cat", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_166.png" },
      { id: 348, name: "Merc & Cat", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_346.png" },
      { id: 349, name: "Titi Cat", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_347.png" },
      { id: 191, name: "MARS PEOPLE", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_189.png" },
      { id: 192, name: "DONALD MORDEN", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_190.png" },
      { id: 193, name: "ALLEN O'NEIL", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_191.png" },
      { id: 194, name: "MARCO", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_192.png" },
      { id: 195, name: "SV-001", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_193.png" },
      { id: 196, name: "HUGE HERMIT", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_194.png" },
      { id: 197, name: "JUPITER KING", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_195.png" },
      { id: 160, name: "Takuya", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_158.png" },
      { id: 261, name: "Takuya and Lovely Yuki", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_259.png" },
      { id: 463, name: "Kano & Souma", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_461.png" },
      { id: 266, name: "Funghi ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_264.webp" },
      { id: 280, name: "Kyuubei", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_278.png" },
      { id: 581, name: "Incubator", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_579.webp" },
      { id: 322, name: "Belial", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_320.png" },
      { id: 370, name: "Saber ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_368.png" },
      { id: 371, name: "Lancer ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_369.png" },
      { id: 372, name: "Archer ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_370.png" },
      { id: 373, name: "Rider ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_371.png" },
      { id: 374, name: "Gilgamesh ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_372.png" },
      { id: 375, name: "Rin Tohsaka ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_373.png" },
      { id: 376, name: "Illyasviel ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_374.png" },
      { id: 443, name: "Saber Alter", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_441.png" },
      { id: 383, name: "Karin Nekozuka ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_381.png" },
      { id: 384, name: "Misaki Konno", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_382.png" },
      { id: 385, name: "Sairi Nijitani", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_383.png" },
      { id: 386, name: "Ren Katagiri", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_384.png" },
      { id: 387, name: "Hater", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_385.png" },
      { id: 393, name: "Mentori ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_391.png" },
      { id: 649, name: "EVA Unit-13 ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_647.webp" },
      { id: 742, name: "Mass Production EVA", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_740.webp" },
      { id: 401, name: "Pokota", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_399.png" },
      { id: 402, name: "Ovis", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_400.png" },
      { id: 403, name: "Coco", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_401.png" },
      { id: 417, name: "Betakkuma", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_415.webp" },
      { id: 454, name: "Super Devil ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_452.png" },
      { id: 455, name: "Satanmaria ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_453.png" },
      { id: 457, name: "Beastly Nero ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_455.png" },
      { id: 472, name: "Shakurel Doge ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_470.png" },
      { id: 473, name: "Shakurel Gory ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_471.png" },
      { id: 475, name: "Shakurel Lion ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_473.png" },
      { id: 476, name: "Shakurel Tiger ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_474.png" },
      { id: 477, name: "Shakurel Panda ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_475.png" },
      { id: 482, name: "Ryu ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_480.png" },
      { id: 483, name: "Chun-Li ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_481.png" },
      { id: 484, name: "Guile ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_482.png" },
      { id: 486, name: "Blanka ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_484.png" },
      { id: 487, name: "Dhalsim ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_485.png" },
      { id: 530, name: "E. Honda ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_528.png" },
      { id: 531, name: "Balrog ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_529.png" },
      { id: 532, name: "Vega ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_530.png" },
      { id: 533, name: "Sagat ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_531.png" },
      { id: 624, name: "Sakura ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_622.png" },
      { id: 625, name: "Luke ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_623.png" },
      { id: 750, name: "Cammy ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_748.webp" },
      { id: 751, name: "Juri ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_749.webp" },
      { id: 505, name: "MikuDoge", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_503.png" },
      { id: 506, name: "MikuGory", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_504.png" },
      { id: 507, name: "MikuBear", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_505.png" },
      { id: 544, name: "Ranma Saotome", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_542.webp" },
      { id: 545, name: "Akane Tendo ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_543.png" },
      { id: 546, name: "Hibiki Ryoga ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_544.webp" },
      { id: 547, name: "Shampoo ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_545.png" },
      { id: 548, name: "Mousse ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_546.webp" },
      { id: 552, name: "Shin Godzilla", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_550.png" },
      { id: 619, name: "Osamu Mikumo & Doge", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_617.png" },
      { id: 620, name: "Yuma Kuga & Doge", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_618.png" },
      { id: 621, name: "Marmod", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_619.png" },
      { id: 689, name: "Madhead", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_687.webp" },
      { id: 690, name: "Kenshin Himura", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_688.webp" },
      { id: 691, name: "Sanosuke Sagara", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_689.png" },
      { id: 692, name: "Aoshi Shinomori ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_690.webp" },
      { id: 693, name: "Hajime Saito", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_691.webp" },
      { id: 726, name: "Baki Hanma ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_724.webp" },
      { id: 727, name: "Retsu Kaioh ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_725.webp" },
      { id: 728, name: "Kaoru Hanayama ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_726.webp" },
      { id: 729, name: "Katsumi Orochi ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_727.webp" },
      { id: 730, name: "Jack Hammer ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_728.webp" },
      { id: 732, name: "Sonic ", img: "enemies/traitless/Collaboration Enemies/Enemy_icon_730.png" },

    ],

    "Cat Counterparts": [
      { id: 77, name: "Crazed Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_075.png" },
      { id: 78, name: "Crazed Tank Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_076.png" },
      { id: 79, name: "Crazed Axe Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_077.png" },
      { id: 80, name: "Crazed Gross Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_078.png" },
      { id: 81, name: "Crazed Cow Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_079.png" },
      { id: 83, name: "Crazed Fish Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_081.png" },
      { id: 84, name: "Crazed Lizard Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_082.png" },
      { id: 84, name: "Crazed Titan Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_083.png" },
      { id: 244, name: "Manic Mohawk Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_242.png" },
      { id: 245, name: "Manic Eraser Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_243.png" },
      { id: 246, name: "Manic Dark Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_244.png" },
      { id: 247, name: "Manic Macho Legs ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_245.png" },
      { id: 248, name: "Manic Lion Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_246.png" },
      { id: 250, name: "Manic Island Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_248.png" },
      { id: 251, name: "Manic King Dragon ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_249.png" },
      { id: 252, name: "Manic Jamiera Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_250.png" },
      { id: 324, name: "Li'l Mohawk Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_322.png" },
      { id: 325, name: "Li'l Eraser Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_323.png" },
      { id: 326, name: "Li'l Dark Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_324.png" },
      { id: 327, name: "Li'l Macho Legs Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_325.png" },
      { id: 328, name: "Li'l Lion Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_326.png" },
      { id: 330, name: "Li'l Island Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_328.png" },
      { id: 331, name: "Li'l King Dragon Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_329.png" },
      { id: 332, name: "Li'l Jamiera Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_330.png" },
      { id: 130, name: "Dancer Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_128.png" },
      { id: 131, name: "Hyper Mr. ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_129.png" },
      { id: 132, name: "Ultimate Bondage Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_130.webp" },
      { id: 134, name: "Heavy Assault C.A.T. ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_132.png" },
      { id: 135, name: "Lollycat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_133.png" },
      { id: 136, name: "Unicycle Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_134.png" },
      { id: 138, name: "Skelecat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_136.png" },
      { id: 139, name: "Pastry Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_137.png" },
      { id: 140, name: "Riceball Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_138.png" },
      { id: 141, name: "Gato Amigo ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_139.png" },
      { id: 142, name: "Loincloth Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_140.png" },
      { id: 272, name: "Rampage Cats ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_270.png" },
      { id: 281, name: "Ritual Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_279.png" },
      { id: 297, name: "Xmas Pudding Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_295.png" },
      { id: 232, name: "Prisoner Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_230.png" },
      { id: 233, name: "Gentleman Bros. ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_231.png" },
      { id: 236, name: "Wrestling Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_234.png" },
      { id: 254, name: "Madam the Savannah ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_252.png" },
      { id: 255, name: "Call Center Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_253.png" },
      { id: 262, name: "Kite Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_260.png" },
      { id: 267, name: "Iron Claw X ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_265.png" },
      { id: 346, name: "Cat Kart P ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_344.png" },
      { id: 347, name: "Nekondo SP ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_344.png" },
      { id: 359, name: "Value Meal Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_357.png" },
      { id: 398, name: "Crazed Moneko ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_396.png" },
      { id: 399, name: "Corrupted Moneko ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_397.png" },
      { id: 637, name: "Easter Egg Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_635.webp" },
      { id: 703, name: "Cafeteria Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_701.png" },
      { id: 47, name: "Ururun Wolf ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_045.png" },
      { id: 260, name: "Red Riding ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_258.png" },
      { id: 356, name: "Hermit Cat ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_354.png" },
      { id: 382, name: "Mystic Mask Yulala ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_380.png" },
      { id: 421, name: "Cat God ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_419.png" },
      { id: 518, name: "Master Uril ", img: "enemies/traitless/Cat Counterparts/Enemy_icon_516.png" },

    ],
  },

  "Red": {
    "Story Enemies": [
      { id: 6, name:"Pigge", img: "enemies/red/Story Enemies/Enemy_icon_004.png"},
      { id: 10, name:"Sir Seal", img: "enemies/red/Story Enemies/Enemy_icon_008.png"},
      { id: 13, name:"One Horn", img: "enemies/red/Story Enemies/Enemy_icon_011.png"},
      { id: 16, name:"B.B.Bunny", img: "enemies/red/Story Enemies/Enemy_icon_014.png"},
      { id: 19, name:"Shy Boy", img: "enemies/red/Story Enemies/Enemy_icon_017.png"},
      { id: 25, name:"Dark Emperor Nyandam", img: "enemies/red/Story Enemies/Enemy_icon_023.png"},
      { id: 40, name:"Bore", img: "enemies/red/Story Enemies/Enemy_icon_038.png"},
      { id: 50, name:"St. Pigge the 2nd", img: "enemies/red/Story Enemies/Enemy_icon_048.png"},
      { id: 51, name:"J.K Bun Bun", img: "enemies/red/Story Enemies/Enemy_icon_049.png"},
      { id: 120, name:"Ginger Snache", img: "enemies/red/Story Enemies/Enemy_icon_118.png"},
      { id: 187, name:"Professor A.", img: "enemies/red/Story Enemies/Enemy_icon_185.png"},
      { id: 207, name:"Capy", img: "enemies/red/Story Enemies/Enemy_icon_205.png"},
      { id: 208, name:"Berserkory", img: "enemies/red/Story Enemies/Enemy_icon_206.png"},
      { id: 257, name:"Two Can", img: "enemies/red/Story Enemies/Enemy_icon_255.png"},
      { id: 389, name:"Hackey", img: "enemies/red/Story Enemies/Enemy_icon_387.png"},
      { id: 523, name:"Johnnyleon", img: "enemies/red/Story Enemies/Enemy_icon_521.png"},
      { id: 543, name:"Raynard", img: "enemies/red/Story Enemies/Enemy_icon_541.webp"},
      { id: 594, name:"Red EnerG", img: "enemies/red/Story Enemies/Enemy_icon_592.png"},
      { id: 606, name:"Casaurian Ahirujo", img: "enemies/red/Story Enemies/Enemy_icon_604.png"},
      { id: 609, name:"J.J. Jackrabbit", img: "enemies/red/Story Enemies/Enemy_icon_607.png"},
      { id: 641, name:"Infernal Pegasus Deonil", img: "enemies/red/Story Enemies/Enemy_icon_639.webp"},
      { id: 694, name:"Doctor K.O.", img: "enemies/red/Story Enemies/Enemy_icon_692.png"},
      { id: 724, name:"Puffzerker", img: "enemies/red/Story Enemies/Enemy_icon_722.png"},

    ],

    "Event Enemies": [
      { id: 66, name:"Red Cyclone", img: "enemies/red/Event Enemies/Enemy_icon_064.png"},
      { id: 65, name:"Dark Emperor Santa", img: "enemies/red/Event Enemies/Enemy_icon_063.png"},
      { id: 87, name:"Samurai Doggy", img: "enemies/red/Event Enemies/Enemy_icon_085.png"},
      { id: 103, name:"Lord Enma", img: "enemies/red/Event Enemies/Enemy_icon_101.png"},
      { id: 113, name:"Pigge Back", img: "enemies/red/Event Enemies/Enemy_icon_111.png"},
      { id: 215, name:"Christmas D.", img: "enemies/red/Event Enemies/Enemy_icon_213.png"},
      { id: 269, name:"Hannya", img: "enemies/red/Event Enemies/Enemy_icon_267.png"},
      { id: 343, name:"Red Slug", img: "enemies/red/Event Enemies/Enemy_icon_341.png"},
      { id: 391, name:"Pigge Victorious", img: "enemies/red/Event Enemies/Enemy_icon_389.png"},
      { id: 424, name:"The Red Malice", img: "enemies/red/Event Enemies/Enemy_icon_422.png"},
      { id: 428, name:"CTO Seal", img: "enemies/red/Event Enemies/Enemy_icon_426.png"},
      { id: 441, name:"Li'l Bore", img: "enemies/red/Event Enemies/Enemy_icon_439.png"},
      { id: 442, name:"Bears Be Back", img: "enemies/red/Event Enemies/Enemy_icon_440.png"},
      { id: 493, name:"Black Okame", img: "enemies/red/Event Enemies/Enemy_icon_491.png"},
      { id: 501, name:"Baron Seal", img: "enemies/red/Event Enemies/Enemy_icon_499.webp"},
      { id: 579, name:"Large Red Ball", img: "enemies/red/Event Enemies/Enemy_icon_577.png"},
      { id: 583, name:"Red Wind", img: "enemies/red/Event Enemies/Enemy_icon_581.png"},
      { id: 600, name:"Firecracker", img: "enemies/red/Event Enemies/Enemy_icon_598.png"},
      { id: 706, name:"Commander Nyandam", img: "enemies/red/Event Enemies/Enemy_icon_704.webp"},
      { id: 707, name:"Commander Hannya", img: "enemies/red/Event Enemies/Enemy_icon_705.webp"},

    ],

    "Collaboration Enemies": [
      { id: 155, name:"Tasmanian Giant Crab", img: "enemies/red/Collaboration Enemies/Enemy_icon_153.png"},
      { id: 485, name:"Zangief", img: "enemies/red/Collaboration Enemies/Enemy_icon_483.png"},
      { id: 488, name:"Ken", img: "enemies/red/Collaboration Enemies/Enemy_icon_486.png"},
      { id: 622, name:"Red Marmod", img: "enemies/red/Collaboration Enemies/Enemy_icon_620.png"},
      { id: 734, name:"", img: "enemies/red/Collaboration Enemies/Enemy_icon_732.webp"},

    ],

    "Cat Counterparts": [
      {id: 150, name: "Li'l Nyandam", img: "enemies/red/Cat Counterparts/Enemy_icon_148.png"},
      {id: 731, name: "Sage of Logic Newton", img: "enemies/red/Cat Counterparts/Enemy_icon_729.webp"}

    ],
  },

  "Floating": {
    "Story Enemies": [
      { id: 20, name:"The Face", img: "enemies/floating/Story Enemies/Enemy_icon_018.png"},
      { id: 24, name:"Mooth", img: "enemies/floating/Story Enemies/Enemy_icon_022.png"},
      { id: 26, name:"Teacher Bun Bun", img: "enemies/floating/Story Enemies/Enemy_icon_024.png"},
      { id: 200, name:"Owlbrow", img: "enemies/floating/Story Enemies/Enemy_icon_037.png"},
      { id: 125, name:"Pigeon de Sable", img: "enemies/floating/Story Enemies/Enemy_icon_123.png"},
      { id: 209, name:"Brollow", img: "enemies/floating/Story Enemies/Enemy_icon_207.png"},
      { id: 274, name:"Li'l Bun Bun", img: "enemies/floating/Story Enemies/Enemy_icon_272.png"},
      { id: 369, name:"The Cat God", img: "enemies/floating/Story Enemies/Enemy_icon_367.png"},
      { id: 500, name:"Gobble", img: "enemies/floating/Story Enemies/Enemy_icon_498.png"},
      { id: 640, name:"Mini White Cyclone", img: "enemies/floating/Story Enemies/Enemy_icon_638.webp"},
      { id: 607, name:"Pterowl Hazuku", img: "enemies/floating/Story Enemies/Enemy_icon_605.png"},

    ],

    "Event Enemies": [
      { id: 71, name:"White Cyclone", img: "enemies/floating/Event Enemies/Enemy_icon_069.png"},
      { id: 105, name:"Ghost Doge", img: "enemies/floating/Event Enemies/Enemy_icon_103.png"},
      { id: 106, name:"Ghost Snache", img: "enemies/floating/Event Enemies/Enemy_icon_104.png"},
      { id: 107, name:"Ghost Baa Baa", img: "enemies/floating/Event Enemies/Enemy_icon_105.png"},
      { id: 200, name:"Count Owlbrow", img: "enemies/floating/Event Enemies/Enemy_icon_198.png"},
      { id: 201, name:"Vlad de Sable", img: "enemies/floating/Event Enemies/Enemy_icon_199.webp"},
      { id: 238, name:"The Perfect Cyclone", img: "enemies/floating/Event Enemies/Enemy_icon_236.png"},
      { id: 301, name:"W (form 1)", img: "enemies/floating/Event Enemies/Enemy_icon_299.webp"},
      { id: 302, name:"W (form 2)", img: "enemies/floating/Event Enemies/Enemy_icon_300.png"},
      { id: 303, name:"W (form 3)", img: "enemies/floating/Event Enemies/Enemy_icon_301.png"},
      { id: 310, name:"Snowball", img: "enemies/floating/Event Enemies/Enemy_icon_308.webp"},
      { id: 436, name:"Sister Lione", img: "enemies/floating/Event Enemies/Enemy_icon_434.png"},
      { id: 672, name:"King's Mimic", img: "enemies/floating/Event Enemies/Enemy_icon_670.png"},
      { id: 686, name:"Mysterious Calamity", img: "enemies/floating/Event Enemies/Enemy_icon_684.webp"},
      { id: 705, name:"Commander Face", img: "enemies/floating/Event Enemies/Enemy_icon_703.png"},
      { id: 708, name:"Commander Bun Bun", img: "enemies/floating/Event Enemies/Enemy_icon_706.webp"},
      { id: 709, name:"Revolutionary Nobunaga", img: "enemies/floating/Event Enemies/Enemy_icon_707.webp"},
      { id: 687, name:"Possessed King Doge", img: "enemies/floating/Event Enemies/Enemy_icon_685.webp"},
      { id: 718, name:"Holy Valkyrie Cat", img: "enemies/floating/Event Enemies/Enemy_icon_716.webp"},
      { id: 719, name:"Awakened Bahamut Cat", img: "enemies/floating/Event Enemies/Enemy_icon_717.webp"},
      { id: 517, name:"Mega-Mooth", img: "enemies/floating/Event Enemies/Enemy_icon_515.webp"},
      { id: 661, name:"Ensanglion the Calamity", img: "enemies/floating/Event Enemies/Enemy_icon_659.webp"},

    ],

    "Collaboration Enemies": [
      { id: 62, name:"Yurinchi", img: "enemies/floating/Collaboration Enemies/Enemy_icon_060.png"},
      { id: 63, name:"Princess Head", img: "enemies/floating/Collaboration Enemies/Enemy_icon_061.png"},
      { id: 464, name:"Gekirinchi", img: "enemies/floating/Collaboration Enemies/Enemy_icon_462.png"},
      { id: 90, name:"Celesse ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_088.png"},
      { id: 95, name:"Serum", img: "enemies/floating/Collaboration Enemies/Enemy_icon_093.png"},
      { id: 96, name:"Fuu ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_094.png"},
      { id: 98, name:"Rei ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_096.png"},
      { id: 99, name:"Wyvern", img: "enemies/floating/Collaboration Enemies/Enemy_icon_097.png"},
      { id: 166, name:"Cornelia ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_164.png"},
      { id: 350, name:"Orthos", img: "enemies/floating/Collaboration Enemies/Enemy_icon_348.png"},
      { id: 351, name:"Michelia ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_349.png"},
      { id: 352, name:"Todomeki ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_350.png"},
      { id: 152, name:"Young Man Mola", img: "enemies/floating/Collaboration Enemies/Enemy_icon_150.png"},
      { id: 153, name:"Mola King", img: "enemies/floating/Collaboration Enemies/Enemy_icon_151.png"},
      { id: 154, name:"Ayumi Manbosaki", img: "enemies/floating/Collaboration Enemies/Enemy_icon_152.png"},
      { id: 156, name:"Sardine ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_154.png"},
      { id: 157, name:"Squid ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_155.webp"},
      { id: 161, name:"Yuki ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_159.png"},
      { id: 341, name:"Lost World Yuki", img: "enemies/floating/Collaboration Enemies/Enemy_icon_339.png"},
      { id: 410, name:"Crazed Yuki", img: "enemies/floating/Collaboration Enemies/Enemy_icon_408.png"},
      { id: 509, name:"Messier", img: "enemies/floating/Collaboration Enemies/Enemy_icon_507.png"},
      { id: 648, name:"Redhead Muscled Yuki Cat", img: "enemies/floating/Collaboration Enemies/Enemy_icon_646.webp"},
      { id: 198, name:"HI-DO", img: "enemies/floating/Collaboration Enemies/Enemy_icon_196.png"},
      { id: 677, name:"SOL DAE ROKKER", img: "enemies/floating/Collaboration Enemies/Enemy_icon_675.png"},
      { id: 323, name:"Happy 100", img: "enemies/floating/Collaboration Enemies/Enemy_icon_321.png"},
      { id: 321, name:"Mobius ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_319.png"},
      { id: 456, name:"Wondermaria", img: "enemies/floating/Collaboration Enemies/Enemy_icon_454.png"},
      { id: 474, name:"Shakurel Face", img: "enemies/floating/Collaboration Enemies/Enemy_icon_472.png"},
      { id: 534, name:"M. Bison", img: "enemies/floating/Collaboration Enemies/Enemy_icon_532.png"},
      { id: 502, name:"Hatsune Miku", img: "enemies/floating/Collaboration Enemies/Enemy_icon_500.png"},
      { id: 503, name:"Sakura Miku", img: "enemies/floating/Collaboration Enemies/Enemy_icon_501.png"},
      { id: 504, name:"Kagamine Rin & Len", img: "enemies/floating/Collaboration Enemies/Enemy_icon_502.png"},
      { id: 538, name:"Megurine Luk", img: "enemies/floating/Collaboration Enemies/Enemy_icon_536.png"},
      { id: 542, name:"Snow Miku 2021", img: "enemies/floating/Collaboration Enemies/Enemy_icon_540.png"},
      { id: 658, name:"Hatsune Miku XVI", img: "enemies/floating/Collaboration Enemies/Enemy_icon_656.png"},
      { id: 688, name:"Voluptuous Peony - Daji", img: "enemies/floating/Collaboration Enemies/Enemy_icon_686.webp"},
      { id: 733, name:"Tails ", img: "enemies/floating/Collaboration Enemies/Enemy_icon_731.png"},

    ],

    "Cat Counterparts": [
      { id: 82, name:"Crazed Bird Cat", img: "enemies/floating/Cat Counterparts/Enemy_icon_080.png"},
      { id: 249, name:"Manic Flying Cat ", img: "enemies/floating/Cat Counterparts/Enemy_icon_247.png"},
      { id: 329, name:"Li'l Flying Cat", img: "enemies/floating/Cat Counterparts/Enemy_icon_327.png"},
      { id: 129, name:"Beefcake Cat", img: "enemies/floating/Cat Counterparts/Enemy_icon_127.png"},
      { id: 137, name:"Flying Ninja Cat ", img: "enemies/floating/Cat Counterparts/Enemy_icon_135.png"},
      { id: 235, name:"Nyalladin ", img: "enemies/floating/Cat Counterparts/Enemy_icon_233.png"},
      { id: 253, name:"Kiss and Koi ", img: "enemies/floating/Cat Counterparts/Enemy_icon_251.png"},
      { id: 183, name:"Corrupted Valkyrie", img: "enemies/floating/Cat Counterparts/Enemy_icon_181.png"},
      { id: 214, name:"Raging Bahamut Cat", img: "enemies/floating/Cat Counterparts/Enemy_icon_212.png"},
      { id: 407, name:"Mecha-Bun", img: "enemies/floating/Cat Counterparts/Enemy_icon_405.png"},
      { id: 449, name:"Filibuster Obstructa", img: "enemies/floating/Cat Counterparts/Enemy_icon_447.png"},
      { id: 632, name:"Metafilibuster ", img: "enemies/floating/Cat Counterparts/Enemy_icon_630.png"},
      { id: 679, name:"Sage of Mind Soractes", img: "enemies/floating/Cat Counterparts/Enemy_icon_677.webp"},

    ],

  },

  "Black": {
    "Story Enemies": [
      { id: 18, name:"Assassin Bear", img: "enemies/black/Story Enemies/Enemy_icon_016.webp"},
      { id: 48, name:"Doge Dark", img: "enemies/black/Story Enemies/Enemy_icon_046.webp"},
      { id: 52, name:"Bun Bun Black", img: "enemies/black/Story Enemies/Enemy_icon_050.png"},
      { id: 53, name:"Gory Black", img: "enemies/black/Story Enemies/Enemy_icon_051.png"},
      { id: 54, name:"Shadow Boxer K", img: "enemies/black/Story Enemies/Enemy_icon_052.png"},
      { id: 55, name:"Director Kurosawah", img: "enemies/black/Story Enemies/Enemy_icon_053.png"},
      { id: 126, name:"Dark Otter", img: "enemies/black/Story Enemies/Enemy_icon_124.png"},
      { id: 151, name:"Le'noir", img: "enemies/black/Story Enemies/Enemy_icon_149.png"},
      { id: 257, name:"Two Can", img: "enemies/black/Story Enemies/Enemy_icon_255.png"},
      { id: 258, name:"Tackey", img: "enemies/black/Story Enemies/Enemy_icon_256.png"},
      { id: 282, name:"Razorback", img: "enemies/black/Story Enemies/Enemy_icon_280.png"},
      { id: 551, name:"Ragin' Gory", img: "enemies/black/Story Enemies/Enemy_icon_549.png"},
      { id: 606, name:"Casaurian Darkjo", img: "enemies/black/Story Enemies/Enemy_icon_611.png"},
      { id: 657, name:"Crocodylidae Kurocroc", img: "enemies/black/Story Enemies/Enemy_icon_655.webp"},
      { id: 684, name:"Dark Dober", img: "enemies/black/Story Enemies/Enemy_icon_682.webp"},
      { id: 715, name:"Prof. Owlbrowley", img: "enemies/black/Story Enemies/Enemy_icon_713.webp"},
      { id: 747, name:"Darkmadillo", img: "enemies/black/Story Enemies/Enemy_icon_745.webp"},

    ],

    "Event Enemies": [
      { id: 72, name:"Black Cyclone", img: "enemies/black/Event Enemies/Enemy_icon_070.png"},
      { id: 89, name:"Gory Groom", img: "enemies/black/Event Enemies/Enemy_icon_087.png"},
      { id: 344, name:"Black Slug", img: "enemies/black/Event Enemies/Enemy_icon_342.png"},
      { id: 418, name:"Selena", img: "enemies/black/Event Enemies/Enemy_icon_416.png"},
      { id: 433, name:"Bakoo", img: "enemies/black/Event Enemies/Enemy_icon_431.png"},
      { id: 439, name:"Lucky Dags", img: "enemies/black/Event Enemies/Enemy_icon_437.webp"},
      { id: 512, name:"Le'Grim", img: "enemies/black/Event Enemies/Enemy_icon_510.webp"},
      { id: 541, name:"Chocolate Doge", img: "enemies/black/Event Enemies/Enemy_icon_539.png"},
      { id: 584, name:"Black Wind", img: "enemies/black/Event Enemies/Enemy_icon_582.png"},
      { id: 714, name:"Mystery Snowmound", img: "enemies/black/Event Enemies/Enemy_icon_712.webp"},

    ],

    "Collaboration Enemies": [
      { id: 490, name:"Akuma ", img: "enemies/black/Collaboration Enemies/Enemy_icon_488.png"},
      { id: 623, name:"Black Marmod", img: "enemies/black/Collaboration Enemies/Enemy_icon_621.webp"},
      { id: 735, name:"Shadow", img: "enemies/black/Collaboration Enemies/Enemy_icon_733.png"},

    ],

    "Cat Counterparts": [
      { id: 133, name:"Dark Lazer", img: "enemies/black/Cat Counterparts/Enemy_icon_131.png"},
      { id: 313, name:"Killer Cat", img: "enemies/black/Cat Counterparts/Enemy_icon_311.png"},
      { id: 635, name:"Killer Tank Cat", img: "enemies/black/Cat Counterparts/Enemy_icon_633.png"},

    ],

  },

  "Metal": {
    "Story Enemies": [
      { id: 49, name:"Metal Hippoe", img: "enemies/metal/Story Enemies/Enemy_icon_047.png"},
      { id: 56, name:"Super Metal Hippoe", img: "enemies/metal/Story Enemies/Enemy_icon_054.png"},
      { id: 58, name:"Metal One Horn", img: "enemies/metal/Story Enemies/Enemy_icon_056.png"},
      { id: 59, name:"Teacher Cybear", img: "enemies/metal/Story Enemies/Enemy_icon_057.png"},
      { id: 60, name:"CyberFace", img: "enemies/metal/Story Enemies/Enemy_icon_058.png"},
      { id: 61, name:"Sir Metal Seal", img: "enemies/metal/Story Enemies/Enemy_icon_059.png"},
      { id: 118, name:"Angel Fanboy", img: "enemies/metal/Story Enemies/Enemy_icon_116.png"},
      { id: 149, name:"Metal Doge", img: "enemies/metal/Story Enemies/Enemy_icon_147.png"},
      { id: 499, name:"Croconator", img: "enemies/metal/Story Enemies/Enemy_icon_497.png"},
      { id: 519, name:"Koronium", img: "enemies/metal/Story Enemies/Enemy_icon_517.png"},

    ],

    "Event Enemies": [
      { id: 57, name:"Type 10", img: "enemies/metal/Event Enemies/Enemy_icon_055.webp"},
      { id: 73, name:"Metal Cyclone", img: "enemies/metal/Event Enemies/Enemy_icon_071.png"},
      { id: 122, name:"Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_120.png"},
      { id: 128, name:"Sunrise Doge", img: "enemies/metal/Event Enemies/Enemy_icon_126.png"},
      { id: 188, name:"DL Anniv. Doge Cake ", img: "enemies/metal/Event Enemies/Enemy_icon_186.webp"},
      { id: 270, name:"Package Doge", img: "enemies/metal/Event Enemies/Enemy_icon_268.png"},
      { id: 299, name:"4th Anniversary Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_297.png"},
      { id: 340, name:"Pure Gold R.Ost", img: "enemies/metal/Event Enemies/Enemy_icon_338.png"},
      { id: 360, name:"Metal Snache", img: "enemies/metal/Event Enemies/Enemy_icon_358.webp"},
      { id: 361, name:"THE METAL SLOTH", img: "enemies/metal/Event Enemies/Enemy_icon_359.png"},
      { id: 378, name:"5th Anniversary Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_376.png"},
      { id: 437, name:"6th Anniversary Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_435.png"},
      { id: 480, name:"Li'l Cake Doge", img: "enemies/metal/Event Enemies/Enemy_icon_478.png"},
      { id: 491, name:"7th Anniversary Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_489.png"},
      { id: 451, name:"Haterbaa 2.0", img: "enemies/metal/Event Enemies/Enemy_icon_449.png"},
      { id: 525, name:"Happy Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_523.png"},
      { id: 535, name:"8th Anniversary Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_533.png"},
      { id: 592, name:"9th Anniversary Birthday Cake", img: "enemies/metal/Event Enemies/Enemy_icon_590.png"},
      { id: 580, name:"Large Iron Ball", img: "enemies/metal/Event Enemies/Enemy_icon_578.webp"},
      { id: 627, name:"10th Anniv. Cake Doge", img: "enemies/metal/Event Enemies/Enemy_icon_625.png"},
      { id: 673, name:"King Doge", img: "enemies/metal/Event Enemies/Enemy_icon_671.png"},
      { id: 674, name:"11th Anniv. Doge Cake", img: "enemies/metal/Event Enemies/Enemy_icon_672.webp"},

    ],

    "Collaboration Enemies": [
      { id: 88, name:"Mega Cat", img: "enemies/metal/Collaboration Enemies/Enemy_icon_086.png"},
      { id: 298, name:"Mega Cat EX", img: "enemies/metal/Collaboration Enemies/Enemy_icon_296.png"},
      { id: 307, name:"Pikotaro ", img: "enemies/metal/Collaboration Enemies/Enemy_icon_305.png"},
      { id: 653, name:"Finale Base ", img: "enemies/metal/Collaboration Enemies/Enemy_icon_651.png"},

    ],

  },

  "Anegel": {
    "Story Enemies": [
      { id: 115, name:"Heavenly Hippoe", img: "enemies/angel/Story Enemies/Enemy_icon_113.png"},
      { id: 116, name:"Gabriel", img: "enemies/angel/Story Enemies/Enemy_icon_114.png"},
      { id: 117, name:"Angelic Gory", img: "enemies/angel/Story Enemies/Enemy_icon_115.png"},
      { id: 121, name:"Sunfish Jones", img: "enemies/angel/Story Enemies/Enemy_icon_119.png"},
      { id: 127, name:"Angelic Sleipnir", img: "enemies/angel/Story Enemies/Enemy_icon_125.png"},
      { id: 162, name:"Chickful A", img: "enemies/angel/Story Enemies/Enemy_icon_160.png"},
      { id: 256, name:"Mr. Angel", img: "enemies/angel/Story Enemies/Enemy_icon_254.png"},
      { id: 263, name:"Boraphim", img: "enemies/angel/Story Enemies/Enemy_icon_261.png"},
      { id: 342, name:"Cala Maria", img: "enemies/angel/Story Enemies/Enemy_icon_340.png"},
      { id: 381, name:"Winged Pigge", img: "enemies/angel/Story Enemies/Enemy_icon_379.png"},
      { id: 515, name:"St. Dober", img: "enemies/angel/Story Enemies/Enemy_icon_513.png"},
      { id: 615, name:"Angelic Beast Rajakong ", img: "enemies/angel/Story Enemies/Enemy_icon_613.png"},
      { id: 617, name:"Great Angel Chibinel ", img: "enemies/angel/Story Enemies/Enemy_icon_615.png"},
      { id: 651, name:"Lutrinae Gokurakko ", img: "enemies/angel/Story Enemies/Enemy_icon_649.webp"},
      { id: 660, name:"Mini Angel Cyclone ", img: "enemies/angel/Story Enemies/Enemy_icon_658.webp"},
      { id: 682, name:"Tarsiriel ", img: "enemies/angel/Story Enemies/Enemy_icon_680.webp"},
      { id: 737, name:"Ange Lackey ", img: "enemies/angel/Story Enemies/Enemy_icon_735.png"},

    ],

    "Event Enemies": [
      { id: 114, name:"Divine Cyclone", img: "enemies/angel/Event Enemies/Enemy_icon_112.png"},
      { id: 234, name:"Cruel Angel Clionel", img: "enemies/angel/Event Enemies/Enemy_icon_232.png"},
      { id: 345, name:"Angelic Slug", img: "enemies/angel/Event Enemies/Enemy_icon_343.png"},
      { id: 423, name:"Heavenly Le'saint", img: "enemies/angel/Event Enemies/Enemy_icon_421.png"},
      { id: 494, name:"Heavenly Herald Papuu", img: "enemies/angel/Event Enemies/Enemy_icon_492.webp"},
      { id: 595, name:"Archangel Exiel", img: "enemies/angel/Event Enemies/Enemy_icon_593.png"},
      { id: 745, name:"Jumbo Jones", img: "enemies/angel/Event Enemies/Enemy_icon_743.png"},

    ],

    "Collaboration Enemies": [
      { id: 458, name:"Head Rococo ", img: "enemies/angel/Collaboration Enemies/Enemy_icon_456.png"},
      { id: 520, name:"Super Zeus ", img: "enemies/angel/Collaboration Enemies/Enemy_icon_518.png"},
      { id: 521, name:"Shaman Khan ", img: "enemies/angel/Collaboration Enemies/Enemy_icon_519.png"},
      { id: 522, name:"Heracrist ", img: "enemies/angel/Collaboration Enemies/Enemy_icon_520.png"},

    ],

  },

  "Alien": {
    "Unstarred Aliens": [
      { id: 169, name:"Shibalien", img: "enemies/alien/Unstarred Aliens/Enemy_icon_167.png"},
      { id: 170, name:"Kroxo", img: "enemies/alien/Unstarred Aliens/Enemy_icon_168.png"},
      { id: 171, name:"Hyppoh", img: "enemies/alien/Unstarred Aliens/Enemy_icon_169.png"},
      { id: 172, name:"Imperator Sael", img: "enemies/alien/Unstarred Aliens/Enemy_icon_170.png"},
      { id: 173, name:"Maawth", img: "enemies/alien/Unstarred Aliens/Enemy_icon_171.png"},
      { id: 174, name:"LeMurr", img: "enemies/alien/Unstarred Aliens/Enemy_icon_172.png"},
      { id: 175, name:"Helmut Krabbe", img: "enemies/alien/Unstarred Aliens/Enemy_icon_173.png"},
      { id: 176, name:"I.M. Phace", img: "enemies/alien/Unstarred Aliens/Enemy_icon_174.png"},
      { id: 177, name:"Ursamajor", img: "enemies/alien/Unstarred Aliens/Enemy_icon_175.png"},
      { id: 178, name:"Cli-One", img: "enemies/alien/Unstarred Aliens/Enemy_icon_176.png"},
      { id: 179, name:"Nimoy Bore", img: "enemies/alien/Unstarred Aliens/Enemy_icon_177.png"},
      { id: 180, name:"Elizabeth the LVIth", img: "enemies/alien/Unstarred Aliens/Enemy_icon_178.png"},
      { id: 182, name:"Galactic Overseer Nyandam", img: "enemies/alien/Unstarred Aliens/Enemy_icon_180.png"},
      { id: 184, name:"Scissoroo", img: "enemies/alien/Unstarred Aliens/Enemy_icon_182.png"},
      { id: 185, name:"Cyberhorn", img: "enemies/alien/Unstarred Aliens/Enemy_icon_183.png"},
      { id: 186, name:"Mistress Celeboodle", img: "enemies/alien/Unstarred Aliens/Enemy_icon_184.png"},
      { id: 210, name:"Calamary", img: "enemies/alien/Unstarred Aliens/Enemy_icon_208.png"},
      { id: 211, name:"Alpacky", img: "enemies/alien/Unstarred Aliens/Enemy_icon_209.png"},
      { id: 212, name:"Elder Sloth", img: "enemies/alien/Unstarred Aliens/Enemy_icon_210.png"},
      { id: 213, name:"Bun Bun Symbiote", img: "enemies/alien/Unstarred Aliens/Enemy_icon_211.png"},
      { id: 608, name:"Crustaceous Scissorex", img: "enemies/alien/Unstarred Aliens/Enemy_icon_606.png"},
      { id: 642, name:"Suidae Piggicus", img: "enemies/alien/Unstarred Aliens/Enemy_icon_640.webp"},
      { id: 725, name:"Commander Ostromeda", img: "enemies/alien/Unstarred Aliens/Enemy_icon_723.png"},

    ],

    "Starred Aliens": [
      { id: 362, name:"Shibalien Elite ", img: "enemies/alien/Starred Aliens/Enemy_icon_360.png"},
      { id: 363, name:"Star Peng ", img: "enemies/alien/Starred Aliens/Enemy_icon_361.png"},
      { id: 364, name:"General GreGory ", img: "enemies/alien/Starred Aliens/Enemy_icon_362.png"},
      { id: 365, name:"Le'Solar ", img: "enemies/alien/Starred Aliens/Enemy_icon_363.png"},
      { id: 366, name:"Project A ", img: "enemies/alien/Starred Aliens/Enemy_icon_364.png"},
      { id: 367, name:"Corporal Weyland ", img: "enemies/alien/Starred Aliens/Enemy_icon_365.png"},
      { id: 368, name:"Spacefish Jones ", img: "enemies/alien/Starred Aliens/Enemy_icon_366.png"},
      { id: 377, name:"Youcan ", img: "enemies/alien/Starred Aliens/Enemy_icon_375.png"},
      { id: 390, name:"UltraBaaBaa ", img: "enemies/alien/Starred Aliens/Enemy_icon_388.png"},
      { id: 419, name:"Kid Tappa ", img: "enemies/alien/Starred Aliens/Enemy_icon_417.png"},
      { id: 420, name:"Ribbo ", img: "enemies/alien/Starred Aliens/Enemy_icon_418.png"},
      { id: 445, name:"Mesocosmocyclone ", img: "enemies/alien/Starred Aliens/Enemy_icon_443.png"},
      { id: 446, name:"Gardeneel Bros. ", img: "enemies/alien/Starred Aliens/Enemy_icon_444.png"},
      { id: 447, name:"Axoloty ", img: "enemies/alien/Starred Aliens/Enemy_icon_445.png"},
      { id: 696, name:"Techn-Old Hyena ", img: "enemies/alien/Starred Aliens/Enemy_icon_694.webp"},

    ],

    "Event Enemies": [
      { id: 181, name:"Cosmic Cyclone ", img: "enemies/alien/Event Enemies/Enemy_icon_179.png"},
      { id: 273, name:"Queen B ", img: "enemies/alien/Event Enemies/Enemy_icon_271.png"},
      { id: 379, name:"Super Cosmic Cyclone ", img: "enemies/alien/Event Enemies/Enemy_icon_377.png"},
      { id: 413, name:"Gorilliam ", img: "enemies/alien/Event Enemies/Enemy_icon_411.png"},
      { id: 432, name:"Satan Claus ", img: "enemies/alien/Event Enemies/Enemy_icon_430.png"},
      { id: 481, name:"Puffsley's Comet ", img: "enemies/alien/Event Enemies/Enemy_icon_479.png"},
      { id: 508, name:"Everlord Wanwan ", img: "enemies/alien/Event Enemies/Enemy_icon_506.png"},
      { id: 527, name:"Super Hyppoh ", img: "enemies/alien/Event Enemies/Enemy_icon_525.webp"},
      { id: 716, name:"Xenobeast Bunaglios ", img: "enemies/alien/Event Enemies/Enemy_icon_714.webp"},

    ],

    "Cat Counterparts": [
      { id: 183, name:"Corrupted Valkyrie ", img: "enemies/alien/Cat Counterparts/Enemy_icon_181.png"},
      { id: 214, name:"Raging Bahamut Cat ", img: "enemies/alien/Cat Counterparts/Enemy_icon_212.png"},
      { id: 449, name:"Filibuster Obstructa ", img: "enemies/alien/Cat Counterparts/Enemy_icon_447.png"},

    ],

  },

  "Zombie": {
    "Story Enemies": [
      { id: 286, name:"Zoge", img: "enemies/zombie/Story Enemies/Enemy_icon_284.png"},
      { id: 287, name:"Znache", img: "enemies/zombie/Story Enemies/Enemy_icon_284.png"},
      { id: 288, name:"Zomboe", img: "enemies/zombie/Story Enemies/Enemy_icon_286.png"},
      { id: 289, name:"Zigge", img: "enemies/zombie/Story Enemies/Enemy_icon_287.png"},
      { id: 290, name:"Zackie Peng", img: "enemies/zombie/Story Enemies/Enemy_icon_288.png"},
      { id: 291, name:"Zory", img: "enemies/zombie/Story Enemies/Enemy_icon_289.png"},
      { id: 292, name:"Zir Zeal", img: "enemies/zombie/Story Enemies/Enemy_icon_290.png"},
      { id: 293, name:"Zang Roo", img: "enemies/zombie/Story Enemies/Enemy_icon_291.png"},
      { id: 294, name:"Zroco", img: "enemies/zombie/Story Enemies/Enemy_icon_292.png"},
      { id: 295, name:"Lord Gravey", img: "enemies/zombie/Story Enemies/Enemy_icon_293.png"},
      { id: 305, name:"Miss Haka", img: "enemies/zombie/Story Enemies/Enemy_icon_303.png"},
      { id: 306, name:"Big Sal", img: "enemies/zombie/Story Enemies/Enemy_icon_304.png"},
      { id: 311, name:"Coffin Zoge", img: "enemies/zombie/Story Enemies/Enemy_icon_309.png"},
      { id: 312, name:"Zamelle", img: "enemies/zombie/Story Enemies/Enemy_icon_310.png"},
      { id: 429, name:"Cadaver Bear", img: "enemies/zombie/Story Enemies/Enemy_icon_427.png"},
      { id: 430, name:"Dread Bore", img: "enemies/zombie/Story Enemies/Enemy_icon_428.png"},
      { id: 470, name:"Zuche", img: "enemies/zombie/Story Enemies/Enemy_icon_468.png"},
      { id: 471, name:"The Thrillerz", img: "enemies/zombie/Story Enemies/Enemy_icon_469.png"},
      { id: 514, name:"Li'l Zyclone", img: "enemies/zombie/Story Enemies/Enemy_icon_512.png"},
      { id: 529, name:"Zollow", img: "enemies/zombie/Story Enemies/Enemy_icon_527.png"},
      { id: 602, name:"Zapy", img: "enemies/zombie/Story Enemies/Enemy_icon_600.png"},
      { id: 616, name:"Formicidaean Ariant", img: "enemies/zombie/Story Enemies/Enemy_icon_614.png"},
      { id: 654, name:"Lophiiformes Angaburu", img: "enemies/zombie/Story Enemies/Enemy_icon_652.webp"},
      { id: 700, name:"Oldstrich", img: "enemies/zombie/Story Enemies/Enemy_icon_698.webp"},
      { id: 746, name:"Deathshund", img: "enemies/zombie/Story Enemies/Enemy_icon_744.webp"},

    ],

    "Event Enemies": [
      { id: 296, name:"Zyclone", img: "enemies/zombie/Event Enemies/Enemy_icon_294.png"},
      { id: 319, name:"Daboo of the Dead", img: "enemies/zombie/Event Enemies/Enemy_icon_317.png"},
      { id: 427, name:"Dead Donny Dash", img: "enemies/zombie/Event Enemies/Enemy_icon_425.png"},
      { id: 513, name:"Death Angel Z-Onel", img: "enemies/zombie/Event Enemies/Enemy_icon_511.png"},
      { id: 596, name:"Big Peng Z", img: "enemies/zombie/Event Enemies/Enemy_icon_594.png"},

    ],

    "Cat Counterparts": [
      { id: 318, name:"Inumusha", img: "enemies/zombie/Cat Counterparts/Enemy_icon_316.png"},

    ],

  },

  "Relic": {
    "Story Enemies": [
      { id: 408, name:"Relic Bun-Bun", img: "enemies/relic/Story Enemies/Enemy_icon_406.png"},
      { id: 409, name:"Relic Doge", img: "enemies/relic/Story Enemies/Enemy_icon_407.png"},
      { id: 414, name:"Sir Rel", img: "enemies/relic/Story Enemies/Enemy_icon_412.png"},
      { id: 415, name:"Oldhorn", img: "enemies/relic/Story Enemies/Enemy_icon_413.png"},
      { id: 416, name:"Othom", img: "enemies/relic/Story Enemies/Enemy_icon_414.png"},
      { id: 422, name:"Loris", img: "enemies/relic/Story Enemies/Enemy_icon_420.png"},
      { id: 425, name:"Lowkey", img: "enemies/relic/Story Enemies/Enemy_icon_423.png"},
      { id: 426, name:"M. Ost", img: "enemies/relic/Story Enemies/Enemy_icon_424.png"},
      { id: 479, name:"Mr. Puffington", img: "enemies/relic/Story Enemies/Enemy_icon_477.png"},
      { id: 611, name:"Golem Sunfish", img: "enemies/relic/Story Enemies/Enemy_icon_609.png"},
      { id: 614, name:"Haniwanwan", img: "enemies/relic/Story Enemies/Enemy_icon_612.webp"},
      { id: 629, name:"Ancient Magamojoe", img: "enemies/relic/Story Enemies/Enemy_icon_627.png"},
      { id: 631, name:"Zero Luza", img: "enemies/relic/Story Enemies/Enemy_icon_629.png"},
      { id: 652, name:"Iguanidae Ibilujon", img: "enemies/relic/Story Enemies/Enemy_icon_650.png"},
      { id: 717, name:"Shachiko", img: "enemies/relic/Story Enemies/Enemy_icon_715.png"},

    ],

    "Event Enemies": [
      { id: 440, name:"Primeval Cyclone", img: "enemies/relic/Event Enemies/Enemy_icon_438.png"},
      { id: 495, name:"Queen Mother V", img: "enemies/relic/Event Enemies/Enemy_icon_493.webp"},
      { id: 537, name:"Evil Emperor Cat", img: "enemies/relic/Event Enemies/Enemy_icon_535.png"},
      { id: 685, name:"Gigahaniwan", img: "enemies/relic/Event Enemies/Enemy_icon_683.webp"},

    ],

    "Cat Counterparts": [
      { id: 452, name:"Dogumaru", img: "enemies/relic/Cat Counterparts/Enemy_icon_450.png"},
      { id: 498, name:"Urs & Fenrir", img: "enemies/relic/Cat Counterparts/Enemy_icon_496.png"},
      { id: 528, name:"Idi:Re", img: "enemies/relic/Cat Counterparts/Enemy_icon_526.png"},
      { id: 553, name:"Elder Flame Doron", img: "enemies/relic/Cat Counterparts/Enemy_icon_551.webp"},
      { id: 591, name:"Masked Grandmaster Cat", img: "enemies/relic/Cat Counterparts/Enemy_icon_589.png"},
      { id: 601, name:"Ultima Beast Naala", img: "enemies/relic/Cat Counterparts/Enemy_icon_599.png"},
      { id: 618, name:"Spiritual Yulala", img: "enemies/relic/Cat Counterparts/Enemy_icon_616.png"},
      { id: 630, name:"Great Ape Luza", img: "enemies/relic/Cat Counterparts/Enemy_icon_628.png"},
      { id: 676, name:"Esoteric Uril", img: "enemies/relic/Cat Counterparts/Enemy_icon_674.png"},
      { id: 701, name:"Sage of Life Dr. Nova", img: "enemies/relic/Cat Counterparts/Enemy_icon_699.webp"},
      { id: 702, name:"Idi:Ne", img: "enemies/relic/Cat Counterparts/Enemy_icon_700.webp"},

    ],

  },

  "Aku": {
    "Story Enemies": [
      { id: 554, name:"Aku Doge", img: "enemies/aku/Story Enemies/Enemy_icon_552.webp"},
      { id: 555, name:"Sinner Snache", img: "enemies/aku/Story Enemies/Enemy_icon_553.png"},
      { id: 556, name:"Cerberus Kids", img: "enemies/aku/Story Enemies/Enemy_icon_554.png"},
      { id: 557, name:"Condemned Peng", img: "enemies/aku/Story Enemies/Enemy_icon_555.png"},
      { id: 558, name:"Aku Gory", img: "enemies/aku/Story Enemies/Enemy_icon_556.png"},
      { id: 559, name:"Le'Behemoth", img: "enemies/aku/Story Enemies/Enemy_icon_557.png"},
      { id: 560, name:"Fallen Bear", img: "enemies/aku/Story Enemies/Enemy_icon_558.png"},
      { id: 561, name:"Wicked Face", img: "enemies/aku/Story Enemies/Enemy_icon_559.png"},
      { id: 572, name:"Dark Priest Mamon", img: "enemies/aku/Story Enemies/Enemy_icon_570.png"},
      { id: 573, name:"High Priest Mamon", img: "enemies/aku/Story Enemies/Enemy_icon_571.png"},
      { id: 585, name:"Medu-san", img: "enemies/aku/Story Enemies/Enemy_icon_583.png"},
      { id: 586, name:"Miz Devil", img: "enemies/aku/Story Enemies/Enemy_icon_584.png"},
      { id: 588, name:"Midnite D.", img: "enemies/aku/Story Enemies/Enemy_icon_586.png"},
      { id: 589, name:"Ackey", img: "enemies/aku/Story Enemies/Enemy_icon_587.png"},
      { id: 590, name:"Deathkory", img: "enemies/aku/Story Enemies/Enemy_icon_588.png"},
      { id: 612, name:"THE FOLIVOREAN", img: "enemies/aku/Story Enemies/Enemy_icon_610.png"},
      { id: 636, name:"Vermilingua Rangmaster", img: "enemies/aku/Story Enemies/Enemy_icon_634.png"},
      { id: 638, name:"Devil Wife", img: "enemies/aku/Story Enemies/Enemy_icon_636.png"},
      { id: 699, name:"Diabrollow", img: "enemies/aku/Story Enemies/Enemy_icon_697.webp"},

    ],

    "Event Enemies": [
      { id: 562, name:"Aku Cyclone", img: "enemies/aku/Event Enemies/Enemy_icon_560.png"},
      { id: 563, name:"Wicked Cat", img: "enemies/aku/Event Enemies/Enemy_icon_561.png"},
      { id: 564, name:"Wicked Tank Cat", img: "enemies/aku/Event Enemies/Enemy_icon_562.png"},
      { id: 565, name:"Wicked Axe Cat", img: "enemies/aku/Event Enemies/Enemy_icon_563.png"},
      { id: 575, name:"Possessed Empress", img: "enemies/aku/Event Enemies/Enemy_icon_573.png"},
      { id: 587, name:"Sathankhamun VIII", img: "enemies/aku/Event Enemies/Enemy_icon_585.png"},
      { id: 639, name:"Omens", img: "enemies/aku/Event Enemies/Enemy_icon_637.png"},
      { id: 644, name:"Infernal Tyrant Nyandam", img: "enemies/aku/Event Enemies/Enemy_icon_642.webp"},

    ],

    "Cat Counterparts": [
      { id: 574, name:"Lord of Ruin Jagando", img: "enemies/aku/Cat Counterparts/Enemy_icon_572.png"},
      { id: 662, name:"Malevolent Mohawk Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_660.webp"},
      { id: 663, name:"Malevolent Eraser Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_661.png"},
      { id: 664, name:"Malevolent Dark Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_662.webp"},
      { id: 665, name:"Malevolent Macho Leg Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_663.webp"},
      { id: 666, name:"Malevolent Lion Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_664.webp"},
      { id: 667, name:"Malevolent Flying Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_665.webp"},
      { id: 668, name:"Malevolent Island Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_666.webp"},
      { id: 669, name:"Malevolent King Dragon Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_667.png"},
      { id: 670, name:"Malevolent Jamiera Cat", img: "enemies/aku/Cat Counterparts/Enemy_icon_668.webp"},

    ],

  },

  "Other": {

    "Witches": [
      { id: 275, name:"The Rose Garden Witch ", img: "enemies/other/witches/Enemy_icon_273.png"},
      { id: 276, name:"Dessert Witch - Obsession ", img: "enemies/other/witches/Enemy_icon_274.png"},
      { id: 277, name:"Dessert Witch ", img: "enemies/other/witches/Enemy_icon_275.png"},
      { id: 278, name:"Box Witch and Minions ", img: "enemies/other/witches/Enemy_icon_276.png"},
      { id: 279, name:"Walpurgisnacht ", img: "enemies/other/witches/Enemy_icon_277.png"},
      { id: 431, name:"Nutcracker Witch ", img: "enemies/other/witches/Enemy_icon_429.png"},

    ],

    "EVA Angels": [
      { id: 394, name:"The 4th Angel ", img: "enemies/other/eva angels/Enemy_icon_392.png"},
      { id: 395, name:"The 6th Angel ", img: "enemies/other/eva angels/Enemy_icon_393.png"},
      { id: 396, name:"The 9th Angel ", img: "enemies/other/eva angels/Enemy_icon_394.png"},
      { id: 397, name:"The 10th Angel ", img: "enemies/other/eva angels/Enemy_icon_395.png"},
      { id: 466, name:"Unit-13's False Evolution ", img: "enemies/other/eva angels/Enemy_icon_464.png"},

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