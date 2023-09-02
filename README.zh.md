# URL解析器 / 重定向URI

URL解析器 / 重定向URI可以显示所有查询参数。

https://kenjiohtsuka.github.io/redirect_uri/


## 作为URL解析器的示例用法

当您想要查看查询参数时，
打开 https://kenjiohtsuka.github.io/redirect_uri/
并将完整的URL设置为输入框，
然后您可以查看查询参数。


## 作为重定向URI的示例用法

当您正在开发OpenID Connect提供程序时，
您可能需要检查您的重定向，
并确保state或code参数被正确重定向。

此页面将帮助您检查重定向。
当您将redirect_uri设置为此页面时，
如 [https://kenjiohtsuka.github.io/redirect_uri/](https://kenjiohtsuka.github.io/redirect_uri/])，
您可以在页面上查看查询参数和其他URL部分。

例如，请访问
https://kenjiohtsuka.github.io/redirect_uri/?code=1234&state=5678
然后您可以查看参数。
