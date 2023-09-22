import JSONTable from '@site/src/components/ui/JSONTable';
import data from "/static/data/ICOWatchers.json"

# Crowdsale Watchers


<JSONTable theadData={Object.keys(data[0])} tbodyData={data}/>