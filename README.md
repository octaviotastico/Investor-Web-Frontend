# Investor Web
##### Complexity: *Low*
##### Intended for: *Frontend*
***
This is a investor website where users can find stock prices from the US stock market.
Users will be able to find stock prices among 5 companies:

- Facebook (FB)
- Apple (AAPL)
- Microsoft (MSFT)
- Google (GOOGL)
- Amazon (AMZN)

Each company has its stock symbol that represents it in the market, for instance Facebook symbol is "FB".

User will pick one company, then system will find out the stock price using a web service called Alpha Vantage, finally webpage will show the requested information to user.
In order to give the information in a richer way, system will compare prices and show variations, this is, calculate if price has increased or decreased by taking open price and compare it against close price, tell the variation using percent calculation (i.e. price increased 1,4%) and absolute value (i.e. price increased USD 5,40).
To represent a price increase use a green color, use red for a price decrease.

Information that will be presented to user is:
- Open price
- Higher price
- Lower price
- Variation against close price using porcentual and absolute values.

**Alpha Vantage API**
```
https://www.alphavantage.co/documentation/
API Key: X86NOH6II01P7R24
```
Imporant: use daily prices only to obtain results (TIME_SERIES_DAILY)

API call sample to get stock prices from Facebook:

`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&outputsize=compact&apikey=X86NOH6II01P7R24`

**Considerations:**
- UI design is up to you.
- Use React for frontend development, it is also possible to use Express (NodeJS) for API interaction and business logic.
- Use GIT for source code admin.
- If you use branching for development and release tag for production version, that will be a plus.
