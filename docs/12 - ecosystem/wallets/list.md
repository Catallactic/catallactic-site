import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem_wallets from "/static/data/ecosystem_wallets.json"

# Wallets

<JSONTable theadData={Object.keys(ecosystem_wallets[0])} tbodyData={ecosystem_wallets}/>


