// 塔羅牌數據
const tarotData = {
    majorArcana: [
        {
            name: "愚者",
            nameEn: "The Fool",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Waite_Rider_Tarot_01_The_Fool.jpg/220px-Waite_Rider_Tarot_01_The_Fool.jpg",
            meaning: "新的開始、冒險、信任直覺、純真",
            advice: "勇往直前，但都要帶番個Plan B。呢張牌提示你機會就喺眼前，唔好諗咁多，做咗先講！",
            keywords: ["新開始", "冒險", "自由", "純真"]
        },
        {
            name: "魔術師",
            nameEn: "The Magician",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Waite_Rider_Tarot_02_The_Magician.jpg/220px-Waite_Rider_Tarot_02_The_Magician.jpg",
            meaning: "創造力、意志力、 manifest、資源充裕",
            advice: "你而家有能力將諗法變成現實！溝通同行動力正值高峰，好好利用呢個能量。",
            keywords: ["創造", "行動", "技能", "掌握"]
        },
        {
            name: "女祭司",
            nameEn: "The High Priestess",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Waite_Rider_Tarot_03_The_High_Priestess.jpg/220px-Waite_Rider_Tarot_03_The_High_Priestess.jpg",
            meaning: "直覺、潛意識、神秘、智慧",
            advice: "而家係信你直覺嘅時候。有啲嘢靠諗未必諗得通，不如凭感觉行一步？",
            keywords: ["直覺", "智慧", "神秘", "內在"]
        },
        {
            name: "皇后",
            nameEn: "The Empress",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Waite_Rider_Tarot_04_The_Empress.jpg/220px-Waite_Rider_Tarot_04_The_Empress.jpg",
            meaning: "豐盛、母性能量、藝術、浪漫",
            advice: "有無限嘅可能性等待緊你！呢段時間特別適合做創意相關嘅嘢，或者學吓嘢都得。",
            keywords: ["豐盛", "創造", "愛", "滋養"]
        },
        {
            name: "皇帝",
            nameEn: "The Emperor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Waite_Rider_Tarot_05_The_Emperor.jpg/220px-Waite_Rider_Tarot_05_The_Emperor.jpg",
            meaning: "權威、紀律、穩定、 structure",
            advice: "係時候建立番啲規矩同 structure。領導能力喺你呢度，好好運用佢！",
            keywords: ["權威", "穩定", "控制", "父親"]
        },
        {
            name: "戀人",
            nameEn: "The Lovers",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Waite_Rider_Tarot_06_The_Lovers.jpg/220px-Waite_Rider_Tarot_06_The_Lovers.jpg",
            meaning: "選擇、夥伴關係、和諧、价值观",
            advice: "呢排有重要決定要做？跟從你嘅價值觀，聽吓你把聲想點講。",
            keywords: ["選擇", "愛情", "和諧", "夥伴"]
        },
        {
            name: "戰車",
            nameEn: "The Chariot",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Waite_Rider_Tarot_07_The_Chariot.jpg/220px-Waite_Rider_Tarot_07_The_Chariot.jpg",
            meaning: "意志力、勝利、控制、前進",
            advice: "你準備好要衝啦！呢張牌話你知只要你keep住專注，勝利就喺前面。",
            keywords: ["勝利", "控制", "前進", "意志"]
        },
        {
            name: "力量",
            nameEn: "Strength",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Waite_Rider_Tarot_08_Strength.jpg/220px-Waite_Rider_Tarot_08_Strength.jpg",
            meaning: "勇氣、耐心、溫柔的力量、克制",
            advice: "表面風浪大，但內心要keep住平静。用你嘅勇氣同耐性去面對，唔好硬碰硬。",
            keywords: ["勇氣", "溫柔", "耐心", "克制"]
        },
        {
            name: "隱者",
            nameEn: "The Hermit",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Waite_Rider_Tarot_09_The_Hermit.jpg/220px-Waite_Rider_Tarot_09_The_Hermit.jpg",
            meaning: "內省、尋找答案、独处、导师",
            advice: "呢排需要啲時間同自己相處。靜吓，先可以聽清楚内心把聲想講乜。",
            keywords: ["内省", "独处", "智慧", "寻找"]
        },
        {
            name: "命運之輪",
            nameEn: "Wheel of Fortune",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Waite_Rider_Tarot_10_Wheel_of_Fortune.jpg/220px-Waite_Rider_Tarot_10_Wheel_of_Fortune.jpg",
            meaning: "轉變、命運、 cycle、機會",
            advice: "好嘢就快到！命運之輪開始向你好嘅方向轉緊，你嘅運氣就嚟轉好嘞。",
            keywords: ["轉變", "命運", "機會", "幸運"]
        },
        {
            name: "正義",
            nameEn: "Justice",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Waite_Rider_Tarot_11_Justice.jpg/220px-Waite_Rider_Tarot_11_Justice.jpg",
            meaning: "公平、真相、因果、決定",
            advice: "真相就快水落石出！呢張牌提醒你要公平對人，同時都要公平對自己。",
            keywords: ["公平", "真相", "因果", "决定"]
        },
        {
            name: "吊人",
            nameEn: "The Hanged Man",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Waite_Rider_Tarot_12_The_Hanged_Man.jpg/220px-Waite_Rider_Tarot_12_The_Hanged_Man.jpg",
            meaning: "等待、犧牲、新的視角、停滯",
            advice: "而家係沉靜期，等吓先。呢個唔係原地踏步，而係用另一個角度睇緊件事。",
            keywords: ["等待", "犧牲", "視角", "停滯"]
        },
        {
            name: "死亡",
            nameEn: "Death",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Waite_Rider_Tarot_13_Death.jpg/220px-Waite_Rider_Tarot_13_Death.jpg",
            meaning: "轉變、結束、新開始、釋放",
            advice: "有啲嘢要結束先會有新開始。唔好怕轉變，呢個係宇宙安排緊啲更好嘢比你。",
            keywords: ["轉變", "結束", "新開始", "釋放"]
        },
        {
            name: "節制",
            nameEn: "Temperance",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Waite_Rider_Tarot_14_Temperance.jpg/220px-Waite_Rider_Tarot_14_Temperance.jpg",
            meaning: "平衡、 moderation、和解、中庸",
            advice: "搵吓個平衡點。太多同太少都唔好，中間先係最好嘅位置。",
            keywords: ["平衡", "節制", "和諧", "中庸"]
        },
        {
            name: "惡魔",
            nameEn: "The Devil",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Waite_Rider_Tarot_15_The_Devil.jpg/220px-Waite_Rider_Tarot_15_The_Devil.jpg",
            meaning: "誘惑、束縛、慾望、物質主義",
            advice: "小心呢排嘅誘惑！有啲嘢睇落好正，但可能會困住你。保持清醒。",
            keywords: ["誘惑", "束縛", "慾望", "物質"]
        },
        {
            name: "塔",
            nameEn: "The Tower",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Waite_Rider_Tarot_16_The_Tower.jpg/220px-Waite_Rider_Tarot_16_The_Tower.jpg",
            meaning: "突變、解放、打破幻象、混亂",
            advice: "可能會有啲突然嘅變化，嚟得急但唔好驚。呢個係清理緊唔好嘅嘢嚟。",
            keywords: ["突變", "解放", "打破", "劇變"]
        },
        {
            name: "星星",
            nameEn: "The Star",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Waite_Rider_Tarot_17_The_Star.jpg/220px-Waite_Rider_Tarot_17_The_Star.jpg",
            meaning: "希望、靈感、平靜、療癒",
            advice: "暴風雨就嚟完結，你嘅希望就喺前面！呢排可能好難，但光明就嚟緊。",
            keywords: ["希望", "療癒", "平靜", "靈感"]
        },
        {
            name: "月亮",
            nameEn: "The Moon",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Waite_Rider_Tarot_18_The_Moon.jpg/220px-Waite_Rider_Tarot_18_The_Moon.jpg",
            meaning: "迷惘、恐懼、潛意識、幻象",
            advice: "而家睇唔清嘅嘢就唔好去追先喇。等霧散咗先行動，唔好自己嚇自己。",
            keywords: ["迷惘", "恐懼", "直覺", "幻象"]
        },
        {
            name: "太陽",
            nameEn: "The Sun",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Waite_Rider_Tarot_19_The_Sun.jpg/220px-Waite_Rider_Tarot_19_The_Sun.jpg",
            meaning: "快樂、成功、活力、真相",
            advice: "超級好嘢嚟緊！呢張牌代表成功、快樂、同正能量。你就嚟行運喇！",
            keywords: ["快樂", "成功", "活力", "正面"]
        },
        {
            name: "審判",
            nameEn: "Judgement",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Waite_Rider_Tarot_20_Judgement.jpg/220px-Waite_Rider_Tarot_20_Judgement.jpg",
            meaning: "覺醒、贖罪、 call to action、改變",
            advice: "係時候反省一下過去，然後決定未來點行。呢張牌話你知你有選擇權。",
            keywords: ["覺醒", "贖罪", "行動", "改變"]
        },
        {
            name: "世界",
            nameEn: "The World",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Waite_Rider_Tarot_21_The_World.jpg/220px-Waite_Rider_Tarot_21_The_World.jpg",
            meaning: "完成、圓滿、成就、統一",
            advice: "一件事就嚟完成！你嘅努力就嚟有結果喇。呢個係好完結同時亦都係新開始。",
            keywords: ["完成", "圓滿", "成就", "統一"]
        }
    ]
};

// 牌陣位置含義
const positions = {
    single: ["呢張牌代表你目前嘅狀況同埋宇宙比你嘅指引"]
};
