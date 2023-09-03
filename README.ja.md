# URL パラメータ解析器 / リダイレクト URI

URLに含まれるクエリパラメータをすべて表示します。

https://kenjiohtsuka.github.io/redirect_uri/


## URL デストラクターとしての使用例

クエリパラメータを表示したい場合、
https://kenjiohtsuka.github.io/redirect_uri/
を開いて、入力ボックスにフルURLを設定し、
その後、クエリパラメータを表示できます。


## リダイレクト URI としての使用例

OpenID Connect プロバイダーを開発している場合、
リダイレクトの確認が必要になることがあります。
そして、state パラメータや code パラメータが正しくリダイレクトされていることを確認する必要があります。

このページは、リダイレクトを確認するのに役立ちます。
redirect_uri をこのページに設定すると、
https://kenjiohtsuka.github.io/redirect_uri/
のように設定した場合、ページ内でクエリパラメータやその他のURLの部分を確認できます。

例えば、
https://kenjiohtsuka.github.io/redirect_uri/?code=1234&state=5678
にアクセスして、パラメータを表示できます。
