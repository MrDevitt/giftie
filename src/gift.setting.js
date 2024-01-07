
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '三周年送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是第一行文案', },
    { key: 's', wording: '这是第二行文案', },
    { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: 'XXX',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 0,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '周生生丘比特之翼', alias: '周生生', image: '/images/1.png',  description: '爱神祝福我们' },
  { key: 'e', name: '小比格儿', alias: '奶比', image: '/images/3.png',  description: '比格爱妈妈' },
  { key: 'w', name: 'iPhone15ProMax', alias: 'iPhone', image: '/images/2.png',  description: '你怎么知道我买了最新的iPhone呀' },
  { key: 'r', name: '澳洲豪华七日游', alias: '澳洲游', image: '/images/6.png',  description: '保日冲澳！' },
  { key: 't', name: '驴牌手提包', alias: 'Lv包', image: '/images/5.png',  description: '去哪里都背' },
  { key: 'y', name: '马牌跑车', alias: '法拉利', image: '/images/6.png',  description: '再也不用叫二姐啦' },
  { key: 'u', name: '红包5201314', alias: '红包', image: '/images/7.png',  description: '爱得简简单单' },
  { key: 'i', name: '成都大别墅', alias: '别墅', image: '/images/8.png',  description: '我们的家' },
];
//周生生丘比特之翼 iPhone15promax 小比格儿 澳洲豪华游 驴牌手提包 马牌跑车 红包5201314 成都大别墅