import JSONTable from '@site/src/components/ui/JSONTable';
import cryptolaw from "/static/data/cryptolaw.json"

# Legal Framework

<JSONTable theadData={[ 'jurisdiction', 'doc', 'url' ]} tbodyData={cryptolaw}/>