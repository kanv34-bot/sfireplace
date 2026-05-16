export interface Case {
  id: string;
  title: string;
  titleEn: string;
  location: string;
  locationEn: string;
  product: string;
  productEn: string;
  description: string;
  descriptionEn: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  content: string[];
  images: string[];
}

const PROJECT = "/media/home/project-cases";
const SECTION = "/media/home/section-illustrations";

export const cases: Case[] = [
  {
    id: "case_1",
    title: "上海静安精品酒店大堂雾化壁炉定制案例",
    titleEn: "Custom Water Vapor Fireplace for a Boutique Hotel Lobby in Shanghai",
    location: "上海静安",
    locationEn: "Shanghai Jing'an",
    product: "雾化壁炉定制",
    productEn: "Custom water vapor fireplace",
    description:
      "酒店希望在大堂入口做出第一眼记忆点，我们用超长雾化壁炉把接待区、休息区和酒廊动线串联起来，形成安全、稳定、适合全天候运营的火焰氛围。",
    descriptionEn:
      "A custom water vapor fireplace creates a safe and memorable lobby focal point for an upscale boutique hotel.",
    seoTitle: "上海酒店大堂雾化壁炉定制案例 | 雾化壁炉厂家方案",
    seoDescription:
      "上海静安精品酒店大堂雾化壁炉定制案例，介绍超长雾化壁炉在酒店接待区、休息区和酒廊空间中的设计、安装和运营优势。",
    keywords: ["雾化壁炉定制", "酒店雾化壁炉", "雾化壁炉厂家", "大堂壁炉设计"],
    content: [
      "这个精品酒店的大堂面积并不算夸张，但客户希望客人推门进入的第一秒，就能感受到品牌调性。原设计方案里只放了一组沙发和背景墙，空间够精致，却缺少一个能被记住的视觉焦点。",
      "我们把壁炉从单独设备变成一条空间线索。雾化壁炉沿着休息区低台展开，火焰效果从入口延伸到酒廊方向，客人办理入住、等待朋友、夜间小坐时都能看见同一段温暖的光。",
      "酒店运营团队最关心安全和维护，所以方案没有采用真火。定制雾化壁炉使用水雾与灯光形成火焰观感，配合检修口、水路预留和分区控制，前台人员可以按时段调整火焰强度。",
      "项目完成后，大堂不再只是通行空间，而变成了适合拍照、停留和交流的场景。对酒店来说，这类雾化壁炉定制不只是装饰，更是提升客户记忆度和空间价值的工程产品。",
    ],
    images: [`${PROJECT}/雪茄会所.png`, `${SECTION}/case-living-room-dark.png`],
  },
  {
    id: "case_2",
    title: "深圳湾高层住宅电子壁炉背景墙案例",
    titleEn: "Electric Fireplace Feature Wall for a Shenzhen Bay Apartment",
    location: "深圳湾",
    locationEn: "Shenzhen Bay",
    product: "电子壁炉",
    productEn: "Electric fireplace",
    description:
      "业主想要真实火焰氛围，但高层住宅不能做复杂烟道，我们用嵌入式电子壁炉配合石材背景墙，完成一个干净、安静、容易维护的客厅中心。",
    descriptionEn:
      "A built-in electric fireplace brings a clean fireplace focal point to a high-rise apartment without chimney work.",
    seoTitle: "深圳高层住宅电子壁炉案例 | 电子壁炉背景墙设计",
    seoDescription:
      "深圳湾高层住宅电子壁炉背景墙案例，适合无烟道住宅、精装房改造和现代客厅壁炉设计参考。",
    keywords: ["电子壁炉", "电子壁炉背景墙", "高层住宅壁炉", "嵌入式电子壁炉"],
    content: [
      "业主住在深圳湾高层，窗外景观很好，但客厅电视墙一直显得平。传统真火壁炉涉及烟道和物业审批，并不适合这个户型，设计师希望找到一个既有火焰氛围又不增加施工风险的方案。",
      "我们建议使用嵌入式电子壁炉，并把设备宽度与电视、石材分缝和地台高度统一起来。壁炉不抢电视的主视觉，却在夜晚提供稳定的橙色光源，让客厅从展示空间变成真正愿意停留的生活空间。",
      "施工重点不在于单台设备，而在于墙体比例。我们提前确认电源、散热距离、检修方式和成品面深度，避免后期出现设备突出、线缆外露或边框压不住的问题。",
      "完成后的客厅保留了现代住宅的清爽感，也有了壁炉带来的情绪价值。对于高层住宅、精装房和公寓项目，电子壁炉是一个兼顾视觉效果、安装效率和后期维护的稳妥选择。",
    ],
    images: [`${PROJECT}/小资.png`, `${SECTION}/case-living-room-warm.png`],
  },
  {
    id: "case_3",
    title: "成都麓湖别墅客厅雾化壁炉定制案例",
    titleEn: "Custom Water Vapor Fireplace for a Chengdu Villa Living Room",
    location: "成都麓湖",
    locationEn: "Chengdu Luxelakes",
    product: "雾化壁炉定制",
    productEn: "Custom water vapor fireplace",
    description:
      "别墅客厅层高高、横向尺度宽，我们用分段式雾化壁炉定制解决火焰长度、补水检修和背景墙比例问题，让空间更有层次。",
    descriptionEn:
      "A segmented custom water vapor fireplace balances flame length, maintenance access and wall proportions in a villa living room.",
    seoTitle: "成都别墅雾化壁炉定制案例 | 客厅长条壁炉设计",
    seoDescription:
      "成都麓湖别墅客厅雾化壁炉定制案例，解析大宅客厅长条雾化壁炉的尺寸、检修、水电预留和背景墙比例。",
    keywords: ["别墅雾化壁炉", "雾化壁炉定制", "客厅长条壁炉", "定制壁炉厂家"],
    content: [
      "这个别墅客厅有接近两层的挑高，沙发区和落地窗都很有气势，但电视背景墙一开始显得过于空。业主不想做复杂造型，希望用更克制的方式把空间压住。",
      "我们把雾化壁炉设计成分段式长条结构，视觉上是一整条连续火线，内部则便于运输、安装和后期维护。这样既满足了大尺度客厅的气势，也避免单段设备过长带来的施工不确定性。",
      "方案阶段重点核对了水位、排水、补水、检修口和灯光色温。雾化壁炉不是只留一个槽就能安装，提前把水电和检修想清楚，后期使用才稳定。",
      "落地后，客厅从白天的开阔感转为夜晚的围合感。雾化壁炉定制让别墅空间有了适合聚会、会客和家庭休息的中心，也让背景墙不需要过度装饰就能成立。",
    ],
    images: [`${PROJECT}/北欧.png`, `${SECTION}/case-living-room-marble.png`],
  },
  {
    id: "case_4",
    title: "杭州私宴会所酒精壁炉真火案例",
    titleEn: "Bioethanol Fireplace for a Private Dining Club in Hangzhou",
    location: "杭州西湖",
    locationEn: "Hangzhou West Lake",
    product: "酒精壁炉",
    productEn: "Bioethanol fireplace",
    description:
      "私宴会所需要真实火焰和仪式感，我们用酒精壁炉在餐前等待区打造真火焦点，同时把通风、台面材质和人员操作流程一起纳入方案。",
    descriptionEn:
      "A bioethanol fireplace adds real flame atmosphere to a private dining club with planned ventilation and operation flow.",
    seoTitle: "杭州会所酒精壁炉案例 | 真火壁炉空间设计",
    seoDescription:
      "杭州私宴会所酒精壁炉案例，介绍酒精壁炉在餐饮、会所和接待空间中的真火氛围、安全距离与操作管理。",
    keywords: ["酒精壁炉", "真火壁炉", "会所壁炉设计", "酒精壁炉厂家"],
    content: [
      "这家私宴会所的客户很明确：他们不想要屏幕里的火，也不想要过于商业化的装饰。来访客人通常会在餐前停留十到二十分钟，空间需要一个有仪式感的真火焦点。",
      "我们为等待区配置酒精壁炉，把火焰放在低台中央，并与皮革座椅、深色木饰面和局部灯光形成关系。火焰高度不追求夸张，而是保持在适合近距离交谈的尺度。",
      "酒精壁炉项目的重点是使用管理。我们和现场团队确认了通风条件、可燃物距离、台面耐热材料、燃料存放位置和员工点火流程，让真火氛围在可控范围内运行。",
      "项目开放后，壁炉成为客人自然聚集的位置。对会所、酒吧、餐厅和私宴空间来说，酒精壁炉的价值在于真实火焰带来的高级感，同时也要求厂家把安全细节做在设计前期。",
    ],
    images: [`${PROJECT}/雪茄会所.png`, `${SECTION}/case-living-room-dark.png`],
  },
  {
    id: "case_5",
    title: "北京品牌展厅投影壁炉沉浸式案例",
    titleEn: "Projection Fireplace for an Immersive Brand Showroom in Beijing",
    location: "北京朝阳",
    locationEn: "Beijing Chaoyang",
    product: "投影壁炉",
    productEn: "Projection fireplace",
    description:
      "品牌展厅希望在大面积墙面上呈现火焰氛围，我们用投影壁炉打造可切换、低维护、适合活动拍摄的沉浸式背景。",
    descriptionEn:
      "A projection fireplace creates a large-scale low-maintenance flame scene for a brand showroom.",
    seoTitle: "北京展厅投影壁炉案例 | 沉浸式火焰背景方案",
    seoDescription:
      "北京品牌展厅投影壁炉案例，适合展厅、发布会、商业活动和大面积火焰背景墙设计参考。",
    keywords: ["投影壁炉", "展厅壁炉", "沉浸式火焰背景", "商业空间壁炉"],
    content: [
      "这个品牌展厅需要经常更换陈列主题，传统固定壁炉会限制布展。客户希望有火焰氛围，但不希望每次活动都重新施工，也不希望后期维护占用运营时间。",
      "我们选用投影壁炉方案，把火焰画面作为空间背景的一部分。它可以在新品发布、客户接待和拍摄时快速打开，也可以根据活动需要切换亮度与画面节奏。",
      "投影壁炉的设计重点是画面比例、观看距离和环境光控制。我们根据墙面宽度、天花高度和人流站位调整投影位置，避免画面变形或被现场灯光冲淡。",
      "最终效果不是一台设备被看见，而是整个展厅被火焰氛围包裹。对于展厅、商业快闪、品牌活动和影视空间，投影壁炉是一种低维护、可变化、适合大面积表达的方案。",
    ],
    images: [`${PROJECT}/新款.png`, `${SECTION}/source-extra-02-1FAF585D-6921-499D-AD28-58F9AA58480D.PNG`],
  },
  {
    id: "case_6",
    title: "广州样板间电子壁炉软装配合案例",
    titleEn: "Electric Fireplace Styling for a Guangzhou Show Apartment",
    location: "广州天河",
    locationEn: "Guangzhou Tianhe",
    product: "电子壁炉",
    productEn: "Electric fireplace",
    description:
      "样板间需要让客户快速想象入住后的生活，我们用电子壁炉和软装灯光配合，把客厅从展示感转为生活感。",
    descriptionEn:
      "An electric fireplace helps a show apartment feel warmer, more livable and easier for buyers to imagine.",
    seoTitle: "广州样板间电子壁炉案例 | 电子壁炉软装搭配",
    seoDescription:
      "广州样板间电子壁炉案例，解析电子壁炉如何配合软装、灯光和背景墙提升住宅展示空间的成交氛围。",
    keywords: ["电子壁炉", "样板间壁炉", "电子壁炉软装", "住宅展示空间"],
    content: [
      "样板间最大的挑战是让客户相信这里不是一套空房，而是未来的生活。原本客厅配置完整，但灯光打开后仍像展示厅，缺少能让人坐下来的温度。",
      "我们在电视背景墙下方嵌入电子壁炉，并让火焰色温与落地灯、茶几烛光和木色家具形成呼应。客户从玄关走到客厅时，视线会自然落到壁炉火焰上。",
      "电子壁炉适合样板间的原因很直接：安装快、维护少、展示稳定，不需要烟道和复杂审批。销售团队每天开关设备即可保持空间氛围一致。",
      "改造后，客户在客厅停留时间明显更长，销售讲解也更容易围绕家庭生活展开。对地产样板间和精装展示空间来说，电子壁炉是一种成本可控但情绪回报很高的配置。",
    ],
    images: [`${PROJECT}/小资2.png`, `${SECTION}/case-living-room-warm.png`],
  },
  {
    id: "case_7",
    title: "苏州河畔民宿雾化壁炉公共区案例",
    titleEn: "Water Vapor Fireplace for a Riverside Guesthouse in Suzhou",
    location: "苏州",
    locationEn: "Suzhou",
    product: "雾化壁炉",
    productEn: "Water vapor fireplace",
    description:
      "民宿公共区需要安全、好拍、能长期运行的火焰氛围，我们用雾化壁炉替代明火，提升入住客人的停留和分享意愿。",
    descriptionEn:
      "A water vapor fireplace creates a safe, photogenic and easy-to-operate public lounge for a guesthouse.",
    seoTitle: "苏州民宿雾化壁炉案例 | 民宿公共区壁炉设计",
    seoDescription:
      "苏州河畔民宿雾化壁炉案例，适合民宿、客栈、公共休息区和小型商业空间参考。",
    keywords: ["雾化壁炉", "民宿壁炉", "公共区壁炉设计", "水雾壁炉"],
    content: [
      "这家河畔民宿的公共区面对庭院，白天很舒服，夜晚却容易冷清。老板希望客人晚上回到民宿后愿意坐下来聊天、拍照和分享，而不是直接回房间。",
      "考虑到民宿人流复杂、工作人员不一定随时在场，我们没有推荐真火方案，而是选择雾化壁炉。火焰效果柔和，靠近休息区也更容易控制安全边界。",
      "现场空间不大，所以壁炉被放进矮墙和木饰面之间，既不占动线，也能成为照片里的背景。我们同时预留了检修位置，方便民宿团队做日常加水和清洁。",
      "上线后，公共区从过道式空间变成了客人愿意停留的社交点。雾化壁炉特别适合民宿、咖啡厅和小型商业空间，在安全和氛围之间取得平衡。",
    ],
    images: [`${PROJECT}/北欧.png`, `${SECTION}/case-living-room-marble.png`],
  },
  {
    id: "case_8",
    title: "青岛海景餐厅酒精壁炉露台案例",
    titleEn: "Bioethanol Fireplace for a Seaview Restaurant Terrace in Qingdao",
    location: "青岛",
    locationEn: "Qingdao",
    product: "酒精壁炉",
    productEn: "Bioethanol fireplace",
    description:
      "海景餐厅希望把露台夜间氛围做得更有记忆点，我们用酒精壁炉形成真火餐前区，让等待也成为体验的一部分。",
    descriptionEn:
      "A bioethanol fireplace turns a restaurant terrace waiting area into a memorable real-flame experience.",
    seoTitle: "青岛餐厅酒精壁炉案例 | 海景露台真火壁炉",
    seoDescription:
      "青岛海景餐厅酒精壁炉露台案例，介绍酒精壁炉在餐饮、露台和商业接待场景中的应用。",
    keywords: ["酒精壁炉", "餐厅壁炉", "露台真火壁炉", "商业酒精壁炉"],
    content: [
      "这家海景餐厅的优势是景观，但夜间海风较大，露台等待区经常被客人忽略。客户希望增加一个能吸引人停留的中心，同时不破坏开阔视野。",
      "我们把酒精壁炉设置在露台内侧的围合座位旁，火焰不遮挡海景，却能提供近距离的真火感。客人等位、餐前饮品和朋友合影都围绕这里发生。",
      "露台项目要特别注意风、材料和操作。方案里控制了火焰位置、周边可燃物距离和服务员操作路径，并建议在强风天气降低使用频率或暂停点火。",
      "酒精壁炉让餐厅的等待区变成了体验区。对海景餐厅、酒吧露台和度假商业来说，真火不是越大越好，而是要与风景、动线和服务节奏保持平衡。",
    ],
    images: [`${PROJECT}/雪茄会所.png`, `${SECTION}/source-extra-04-429D1457-F55A-48EC-854D-CC3D5BC5732D.PNG`],
  },
  {
    id: "case_9",
    title: "重庆售楼处超长雾化壁炉定制案例",
    titleEn: "Extra-Long Custom Water Vapor Fireplace for a Chongqing Sales Center",
    location: "重庆",
    locationEn: "Chongqing",
    product: "雾化壁炉定制",
    productEn: "Custom water vapor fireplace",
    description:
      "售楼处沙盘区需要强视觉焦点，我们用超长雾化壁炉定制把洽谈区和展示区连接起来，增强客户对高端项目的现场感知。",
    descriptionEn:
      "An extra-long water vapor fireplace connects the model area and negotiation zone in a sales center.",
    seoTitle: "重庆售楼处雾化壁炉定制案例 | 超长水雾壁炉工程",
    seoDescription:
      "重庆售楼处超长雾化壁炉定制案例，适合地产销售中心、沙盘区、洽谈区和高端展示空间参考。",
    keywords: ["雾化壁炉定制", "售楼处壁炉", "超长雾化壁炉", "水雾壁炉厂家"],
    content: [
      "售楼处的空间通常很完整，但也容易显得套路化。这个项目希望客户从沙盘区走向洽谈区时，有一个连续的视觉记忆，而不是只看到材料和模型。",
      "我们把超长雾化壁炉放在沙盘区侧面，让火焰线条与动线平行。客户看完区位模型后，沿着火焰方向进入洽谈区，空间体验更顺，也更容易形成高级感。",
      "超长壁炉的关键是分段控制和维护便利。我们在方案里拆分设备段落，预留检修口，并确认补水方式，保证展示中心长时间开放时仍能稳定运行。",
      "项目完成后，雾化壁炉成为售楼处最容易被拍到的背景之一。对地产展示空间来说，雾化壁炉定制可以把产品价值从图纸和沙盘转化为客户真实感受到的空间情绪。",
    ],
    images: [`${SECTION}/factory-strength-collage.png`, `${PROJECT}/新款.png`],
  },
  {
    id: "case_10",
    title: "厦门海边别墅投影壁炉影音室案例",
    titleEn: "Projection Fireplace for a Seaside Villa Media Room in Xiamen",
    location: "厦门",
    locationEn: "Xiamen",
    product: "投影壁炉",
    productEn: "Projection fireplace",
    description:
      "影音室需要可变化的沉浸氛围，我们把投影壁炉融入背景墙系统，让家庭观影、聚会和休闲模式可以自由切换。",
    descriptionEn:
      "A projection fireplace adds flexible flame ambience to a seaside villa media room.",
    seoTitle: "厦门别墅投影壁炉案例 | 影音室火焰背景墙",
    seoDescription:
      "厦门海边别墅投影壁炉影音室案例，适合影音室、地下会客厅和别墅休闲空间的沉浸式壁炉方案。",
    keywords: ["投影壁炉", "影音室壁炉", "别墅壁炉设计", "火焰背景墙"],
    content: [
      "这套海边别墅的影音室原本只服务观影，平时使用率不高。业主希望它也能承担家庭聚会、朋友小坐和孩子活动空间的功能。",
      "我们没有在影音室里增加明火，而是采用投影壁炉。观影时画面可以关闭，聚会时则切换为大面积火焰背景，让空间从影院模式转为休闲模式。",
      "投影壁炉要和影音系统协同，不能影响主屏幕，也不能产生杂乱反光。我们根据墙面材质、投影距离和灯光回路调整方案，让火焰画面保持柔和而不刺眼。",
      "改造后，影音室的使用场景更丰富。投影壁炉适合别墅地下室、影音房、会客厅和展示空间，尤其适合需要大画面氛围但不想增加维护压力的项目。",
    ],
    images: [`${PROJECT}/新款.png`, `${SECTION}/source-extra-02-1FAF585D-6921-499D-AD28-58F9AA58480D.PNG`],
  },
  {
    id: "case_11",
    title: "西安艺术酒店套房雾化壁炉案例",
    titleEn: "Water Vapor Fireplace for an Art Hotel Suite in Xi'an",
    location: "西安",
    locationEn: "Xi'an",
    product: "雾化壁炉",
    productEn: "Water vapor fireplace",
    description:
      "艺术酒店套房需要有拍摄记忆点，但不能增加客房安全管理难度，我们用雾化壁炉在床尾休闲区做出温暖而克制的火焰场景。",
    descriptionEn:
      "A water vapor fireplace adds a safe and photogenic flame scene to an art hotel suite.",
    seoTitle: "西安酒店套房雾化壁炉案例 | 客房水雾壁炉设计",
    seoDescription:
      "西安艺术酒店套房雾化壁炉案例，适合精品酒店、设计酒店和民宿客房壁炉设计参考。",
    keywords: ["雾化壁炉", "酒店套房壁炉", "客房壁炉设计", "水雾壁炉"],
    content: [
      "这间艺术酒店套房面积不大，但客户希望它有区别于普通客房的记忆点。真火方案会增加客房管理难度，电子壁炉又略显常规，最后我们选择雾化壁炉。",
      "壁炉被放在床尾休闲区和窗边之间，客人坐在单椅上可以看到火焰，躺在床上也能感受到柔和光线。它不是主角式的豪华，而是让房间变得更有故事。",
      "客房项目的关键是安全和静音。我们控制了设备位置、运行噪声、灯光亮度和维护入口，避免影响睡眠，也方便保洁人员进行日常检查。",
      "完成后，套房在社交平台上更容易被客人拍摄和分享。对精品酒店来说，雾化壁炉不是单纯增加配置，而是用可控、安全的方式提升房价感和入住体验。",
    ],
    images: [`${PROJECT}/小资.png`, `${SECTION}/case-living-room-warm.png`],
  },
  {
    id: "case_12",
    title: "南京顶层公寓电子壁炉电视墙案例",
    titleEn: "Electric Fireplace TV Wall for a Nanjing Penthouse Apartment",
    location: "南京",
    locationEn: "Nanjing",
    product: "电子壁炉",
    productEn: "Electric fireplace",
    description:
      "顶层公寓原本电视墙比例偏短，我们用电子壁炉拉开横向尺度，并通过石材、木饰面和灯带让客厅更完整。",
    descriptionEn:
      "An electric fireplace balances the TV wall proportions in a penthouse living room.",
    seoTitle: "南京顶层公寓电子壁炉案例 | 电视墙嵌入式壁炉",
    seoDescription:
      "南京顶层公寓电子壁炉电视墙案例，适合现代住宅、精装房改造和无烟道空间的嵌入式电子壁炉方案。",
    keywords: ["电子壁炉", "电视墙壁炉", "嵌入式电子壁炉", "公寓壁炉设计"],
    content: [
      "这套顶层公寓的客厅进深大，但电视墙宽度有限，原设计看起来不够舒展。业主不想增加复杂造型，希望墙面更稳、更有生活气息。",
      "我们把电子壁炉放在电视下方偏长的水平线上，用火焰宽度弥补墙体比例。石材背景、木饰面侧柜和底部壁炉形成三段关系，让电视墙从单一功能墙变成空间中心。",
      "为了保证成品效果，施工前确认了设备净尺寸、墙体深度、插座位置和检修方式。电子壁炉虽然安装方便，但如果比例没处理好，最后仍会显得廉价。",
      "落地后，客厅在白天保持利落，夜晚打开电子壁炉后更有温度。对公寓和平层住宅来说，电子壁炉背景墙是提升空间完成度的高效率做法。",
    ],
    images: [`${PROJECT}/北欧.png`, `${SECTION}/case-living-room-marble.png`],
  },
  {
    id: "case_13",
    title: "武汉商业中庭雾化壁炉景观案例",
    titleEn: "Water Vapor Fireplace Landscape for a Wuhan Commercial Atrium",
    location: "武汉",
    locationEn: "Wuhan",
    product: "雾化壁炉定制",
    productEn: "Custom water vapor fireplace",
    description:
      "商业中庭需要一个能聚集人流的视觉装置，我们用雾化壁炉定制结合绿植、水景和休息座椅，形成可停留的公共空间。",
    descriptionEn:
      "A custom water vapor fireplace becomes a safe gathering feature in a commercial atrium.",
    seoTitle: "武汉商业中庭雾化壁炉案例 | 商业空间水雾壁炉定制",
    seoDescription:
      "武汉商业中庭雾化壁炉景观案例，适合购物中心、商业街区和公共休息区的雾化壁炉定制方案。",
    keywords: ["商业空间壁炉", "雾化壁炉定制", "中庭景观壁炉", "水雾壁炉工程"],
    content: [
      "商业中庭最大的问题不是没有设计，而是人们经过得太快。甲方希望增加一个能让人自然停下来的景观点，同时不能影响商场消防和日常运营。",
      "我们把雾化壁炉与绿植、水景和环形座椅结合，火焰在公共空间中形成柔和边界。它不像真火那样需要大面积隔离，也比普通灯光装置更有情绪记忆。",
      "商业项目需要关注连续运行能力。方案中对设备分区、补水、排水、检修口和人流安全距离做了详细确认，保证周末高峰期也能稳定开放。",
      "完成后的中庭从过路空间变成了可停留空间。雾化壁炉定制在商业场景中的价值，是把视觉吸引、运营安全和社交停留结合在一起。",
    ],
    images: [`${SECTION}/factory-strength-collage.png`, `${PROJECT}/小资2.png`],
  },
  {
    id: "case_14",
    title: "长沙私宅茶室酒精壁炉案例",
    titleEn: "Bioethanol Fireplace for a Private Tea Room in Changsha",
    location: "长沙",
    locationEn: "Changsha",
    product: "酒精壁炉",
    productEn: "Bioethanol fireplace",
    description:
      "私宅茶室需要安静、克制但有真火气息的空间，我们用小尺度酒精壁炉配合石材台面，让会客更有仪式感。",
    descriptionEn:
      "A compact bioethanol fireplace adds real flame atmosphere to a private tea room.",
    seoTitle: "长沙私宅茶室酒精壁炉案例 | 小型真火壁炉设计",
    seoDescription:
      "长沙私宅茶室酒精壁炉案例，适合茶室、书房、私宅会客区和小尺度真火壁炉空间参考。",
    keywords: ["酒精壁炉", "茶室壁炉", "小型真火壁炉", "私宅壁炉设计"],
    content: [
      "业主的茶室不大，但使用频率很高。这里既是独处喝茶的地方，也是接待朋友的小会客厅，空间需要安静，却不能冷。",
      "我们没有选择大尺寸壁炉，而是在石材茶台侧面做小尺度酒精壁炉。火焰位置低、距离近，既有真火的呼吸感，又不会压过茶室本身的宁静。",
      "小空间使用酒精壁炉要把安全边界讲清楚。我们调整了台面材料、火源距离、坐席位置和燃料收纳方式，并给业主明确日常点火与熄火流程。",
      "完成后，茶室多了一层时间感。火焰不只是装饰，而是让谈话慢下来。对私宅茶室、书房和小型会客区来说，酒精壁炉适合追求真实火焰但空间尺度克制的客户。",
    ],
    images: [`${PROJECT}/小资.png`, `${SECTION}/case-living-room-dark.png`],
  },
  {
    id: "case_15",
    title: "三亚度假酒店投影壁炉宴会厅案例",
    titleEn: "Projection Fireplace for a Resort Hotel Ballroom in Sanya",
    location: "三亚",
    locationEn: "Sanya",
    product: "投影壁炉",
    productEn: "Projection fireplace",
    description:
      "度假酒店宴会厅需要根据婚礼、发布会和晚宴快速切换氛围，我们用投影壁炉形成可控的大面积火焰背景。",
    descriptionEn:
      "A projection fireplace gives a resort hotel ballroom a flexible flame backdrop for events.",
    seoTitle: "三亚酒店宴会厅投影壁炉案例 | 大面积火焰背景",
    seoDescription:
      "三亚度假酒店投影壁炉宴会厅案例，适合婚礼、发布会、晚宴和酒店活动空间的投影壁炉方案。",
    keywords: ["投影壁炉", "酒店宴会厅壁炉", "火焰背景墙", "活动空间壁炉"],
    content: [
      "宴会厅每天面对不同活动，固定装饰很容易限制场景。酒店希望有一种能快速制造氛围的火焰背景，同时不增加明火审批和现场管理压力。",
      "我们采用投影壁炉，把火焰画面整合到舞台背景系统中。婚礼时火焰柔和，发布会时画面更有力量，晚宴时则降低亮度，让空间保持温暖而不抢主题。",
      "这个项目重点处理画面尺寸、投影角度和灯光干扰。宴会厅灯光复杂，如果只追求画面大，很容易失真，所以我们根据不同活动模式做了亮度预案。",
      "投影壁炉让宴会厅拥有更灵活的视觉语言。对酒店宴会、商业活动和大型发布空间来说，它是一种不依赖燃料、维护简单、可快速切换的火焰氛围方案。",
    ],
    images: [`${PROJECT}/新款.png`, `${SECTION}/source-extra-02-1FAF585D-6921-499D-AD28-58F9AA58480D.PNG`],
  },
  {
    id: "case_16",
    title: "宁波设计师工作室电子壁炉展示案例",
    titleEn: "Electric Fireplace Display for a Designer Studio in Ningbo",
    location: "宁波",
    locationEn: "Ningbo",
    product: "电子壁炉",
    productEn: "Electric fireplace",
    description:
      "设计师工作室需要把材料、灯光和产品体验放在一起，我们用电子壁炉做成可讲解的样板墙，帮助客户理解壁炉背景墙效果。",
    descriptionEn:
      "An electric fireplace display wall helps a designer studio present materials, lighting and fireplace ambience together.",
    seoTitle: "宁波设计师工作室电子壁炉案例 | 样板墙展示方案",
    seoDescription:
      "宁波设计师工作室电子壁炉展示案例，适合设计公司、建材展厅和壁炉厂家样板空间参考。",
    keywords: ["电子壁炉", "壁炉样板墙", "设计师工作室", "电子壁炉展示"],
    content: [
      "设计师工作室经常要给客户解释效果图里的壁炉背景墙，但没有实物时，客户很难判断火焰、材质和灯光叠加后的真实效果。",
      "我们帮助工作室搭建了一面电子壁炉样板墙，把石材、木饰面、灯带、壁炉设备和收口节点放在同一面墙上。客户进店后可以直接看到不同材料组合的呈现方式。",
      "展示空间强调可讲解性。设备位置、检修方式和线缆隐藏都做成清晰样板，设计师不仅能展示效果，也能向客户解释施工逻辑。",
      "这面样板墙后来成为工作室成交的重要辅助。电子壁炉不只是终端客户使用的产品，也适合设计公司、整装展厅和厂家展厅作为可体验的销售工具。",
    ],
    images: [`${PROJECT}/小资2.png`, `${SECTION}/case-living-room-warm.png`],
  },
  {
    id: "case_17",
    title: "天津别墅地下会客厅雾化壁炉定制案例",
    titleEn: "Custom Water Vapor Fireplace for a Tianjin Villa Basement Lounge",
    location: "天津",
    locationEn: "Tianjin",
    product: "雾化壁炉定制",
    productEn: "Custom water vapor fireplace",
    description:
      "地下会客厅采光有限，我们用雾化壁炉定制补足空间中心和光线层次，让原本偏冷的地下空间变成朋友聚会区。",
    descriptionEn:
      "A custom water vapor fireplace turns a dim basement lounge into a warm gathering space.",
    seoTitle: "天津别墅地下室雾化壁炉定制案例 | 会客厅壁炉设计",
    seoDescription:
      "天津别墅地下会客厅雾化壁炉定制案例，适合地下室、会客厅、娱乐室和别墅休闲空间参考。",
    keywords: ["雾化壁炉定制", "地下室壁炉", "别墅会客厅壁炉", "水雾壁炉"],
    content: [
      "这个别墅地下室原本规划为会客和影音空间，但因为自然光少，空间完成后始终有些冷。业主希望这里成为朋友聚会的主要区域，而不是偶尔才使用的房间。",
      "我们将雾化壁炉设置在沙发区和吧台之间，形成地下空间的视觉中心。火焰没有明火风险，适合多人聚会，也能和影音、酒柜、灯光一起营造氛围。",
      "地下室项目特别重视通风、防潮和检修。我们在定制方案里确认了设备位置、补水路线、维护入口和周边材料，避免后期因为潮湿或检修不便影响使用。",
      "完成后，地下会客厅从功能房变成了真正愿意使用的生活场景。雾化壁炉定制适合地下室这类需要补充光线层次和情绪中心的空间。",
    ],
    images: [`${PROJECT}/雪茄会所.png`, `${SECTION}/case-living-room-dark.png`],
  },
  {
    id: "case_18",
    title: "郑州茶餐空间酒精壁炉隔断案例",
    titleEn: "Bioethanol Fireplace Divider for a Dining and Tea Space in Zhengzhou",
    location: "郑州",
    locationEn: "Zhengzhou",
    product: "酒精壁炉",
    productEn: "Bioethanol fireplace",
    description:
      "茶餐空间希望用真火区分用餐和等候区域，我们把酒精壁炉做进隔断台面，让火焰成为空间分界而不是单独摆件。",
    descriptionEn:
      "A bioethanol fireplace divider separates dining and waiting areas with a real-flame feature.",
    seoTitle: "郑州茶餐空间酒精壁炉案例 | 真火隔断壁炉设计",
    seoDescription:
      "郑州茶餐空间酒精壁炉隔断案例，适合餐饮、茶空间、会所和商业接待区的酒精壁炉方案。",
    keywords: ["酒精壁炉", "隔断壁炉", "餐饮空间壁炉", "真火壁炉设计"],
    content: [
      "这个茶餐空间的平面很开放，等候区、用餐区和收银区容易混在一起。设计师希望用一种更柔和的方式划分空间，而不是增加实体墙。",
      "我们把酒精壁炉嵌入低矮隔断台面，火焰成为两个区域之间的界线。客人不会被阻隔视线，但会自然感知到空间层次。",
      "餐饮空间使用真火必须考虑服务动线。方案中调整了桌椅距离、台面材质、燃料补充位置和员工操作流程，让火焰成为体验的一部分，而不是运营负担。",
      "项目完成后，等候区和用餐区都有了清晰边界，火焰也提升了空间记忆点。酒精壁炉适合需要真实火焰、空间尺度不大、但愿意认真管理使用流程的商业项目。",
    ],
    images: [`${PROJECT}/北欧.png`, `${SECTION}/source-extra-04-429D1457-F55A-48EC-854D-CC3D5BC5732D.PNG`],
  },
  {
    id: "case_19",
    title: "昆明康养中心电子壁炉与雾化壁炉组合案例",
    titleEn: "Electric and Water Vapor Fireplace Combination for a Wellness Center in Kunming",
    location: "昆明",
    locationEn: "Kunming",
    product: "电子壁炉 + 雾化壁炉",
    productEn: "Electric and water vapor fireplaces",
    description:
      "康养中心需要温暖但不能刺激的环境，我们在公共休息区用电子壁炉，在接待景观区用雾化壁炉，分别解决陪伴感和视觉焦点。",
    descriptionEn:
      "Electric and water vapor fireplaces create a calm, safe and welcoming environment for a wellness center.",
    seoTitle: "昆明康养中心电子壁炉雾化壁炉案例 | 康养空间壁炉设计",
    seoDescription:
      "昆明康养中心电子壁炉与雾化壁炉组合案例，适合康养中心、养老空间、公共休息区和接待景观区参考。",
    keywords: ["电子壁炉", "雾化壁炉", "康养空间壁炉", "公共休息区壁炉"],
    content: [
      "康养中心的空间不能只追求好看，它更需要让人放松、安心和愿意停留。客户希望壁炉带来温暖感，但不希望明火增加管理压力。",
      "我们把电子壁炉放在公共休息区，老人和家属坐下时能获得稳定、安静的陪伴感；同时在接待景观区设置雾化壁炉，用更轻盈的火焰效果作为入口记忆点。",
      "两类产品承担不同任务。电子壁炉负责日常稳定运行，雾化壁炉负责视觉吸引和空间层次。方案阶段重点确认了安全距离、操作便利性和维护频率。",
      "组合完成后，康养中心不再像普通机构空间，而更像温暖的生活场所。对康养、养老、月子中心和公共休息区来说，电子壁炉与雾化壁炉组合能兼顾安全、氛围和运营效率。",
    ],
    images: [`${PROJECT}/小资.png`, `${SECTION}/case-living-room-marble.png`],
  },
  {
    id: "case_20",
    title: "合肥厂家展厅五类壁炉综合展示案例",
    titleEn: "Five-Fireplace Product Display for a Factory Showroom in Hefei",
    location: "合肥",
    locationEn: "Hefei",
    product: "电子壁炉 / 雾化壁炉 / 酒精壁炉 / 投影壁炉",
    productEn: "Electric, water vapor, bioethanol and projection fireplaces",
    description:
      "厂家展厅需要让客户一次看懂不同产品的适用场景，我们按住宅、商业、酒店和定制工程重新组织电子壁炉、雾化壁炉、酒精壁炉和投影壁炉。",
    descriptionEn:
      "A factory showroom displays electric, water vapor, bioethanol and projection fireplaces by real project scenarios.",
    seoTitle: "壁炉厂家展厅案例 | 电子壁炉雾化壁炉酒精壁炉投影壁炉展示",
    seoDescription:
      "合肥厂家展厅五类壁炉综合展示案例，帮助客户理解电子壁炉、雾化壁炉、雾化壁炉定制、酒精壁炉和投影壁炉的应用场景。",
    keywords: ["壁炉厂家", "电子壁炉", "雾化壁炉定制", "酒精壁炉", "投影壁炉"],
    content: [
      "很多客户第一次了解壁炉时，最难的问题不是价格，而是不知道哪一种产品适合自己的空间。厂家展厅如果只按产品摆放，客户看完仍然很难做决定。",
      "我们把展厅重新按场景组织：住宅客厅展示电子壁炉，酒店大堂展示雾化壁炉定制，会所区域展示酒精壁炉，活动区展示投影壁炉，让客户先看场景，再理解产品。",
      "每个展示点都配合材料、尺寸、检修和水电说明。客户不仅能看到火焰效果，也能理解后期安装需要预留什么，设计师和工程方沟通时更有效率。",
      "这个展厅的价值在于把厂家实力转化为可被客户理解的体验。电子壁炉、雾化壁炉、雾化壁炉定制、酒精壁炉和投影壁炉各有边界，按场景展示比单纯罗列产品更容易促成信任。",
    ],
    images: [`${SECTION}/factory-strength-collage.png`, `${PROJECT}/新款.png`],
  },
];
