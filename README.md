# jmr图床 
修改自telegraph-Image

### 优点

1. 无限图片储存数量，你可以上传不限数量的图片

2. 无需购买服务器，托管于Cloudflare的网络上，当使用量不超过Cloudflare的免费额度时，完全免费

3. 无需购买域名，可以使用Cloudflare Pages提供的*.pages.dev的免费二级域名，同时也支持绑定自定义域名

4. 支持图片审查API，可根据需要开启，开启后不良图片将自动屏蔽，不再加载

5. 支持后台图片管理(炸掉了)，日志管理，查看访问前20的Referer、IP、img,可以对上传的图片进行在线预览，添加白名单，黑名单等操作



> 环境变量

| 变量名称      | 值 | type |
| ----------- | ----------- | ----------- |
|PROXYALLIMG  | 反向代理所有图片（默认为false）| boolean |
|BASIC_USER   | 后台管理页面登录用户名称| string |
|BASIC_PASS   | 后台管理页面登录用户密码| string |
|ENABLE_AUTH_API   | 是否开启访客验证 （默认为false）| boolean |
|REGULAR_USER | 普通用户 （访客验证）| string |
|REGULAR_PASS   | 普通用户密码| string |
|ModerateContentApiKey   | 审查图像内容的API key| string |
|RATINGAPI     | [自建的鉴黄api](https://github.com/x-dr/nsfwjs-api) | string |
|CUSTOM_DOMAIN | https://your-custom-domain.com (自定义加速域名) | string |
|TG_BOT_TOKEN  | 123468:AAxxxGKrn5 (从 [@BotFather](https://t.me/BotFather)) |string |
|TG_CHAT_ID   | -1234567 (频道的ID,TG Bot要是该频道或群组的管理员) |string |

> TG_BOT_TOKEN

> 获取ID机器人 @VersaToolsBot








