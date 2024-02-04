/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8276e3258ebad5fd',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '37edcd8745b231c5e0e3f5da683a6ee4',

  PROVINCE: '湖南',
  CITY: '长沙',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orJMe665f-wm7-7vthhNOioFzsLs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fea6TOynNkMz8BW4GUrfTpld0mHAIImNJy7xyzfC9eM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-01',
      loveDate:'2023-12-25'
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '容容', year: '1995', date: '11-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '容容', year: '1995', date: '12-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '12-25',
        },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'fea6TOynNkMz8BW4GUrfTpld0mHAIImNJy7xyzfC9eM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orJMe665f-wm7-7vthhNOioFzsLs',
    }
  ],

}

module.exports = USER_CONFIG

