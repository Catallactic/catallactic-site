import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem_dlt from "/static/data/ecosystem_dlt.json"

# DLT Networks

<JSONTable theadData={Object.keys(ecosystem_dlt[0])} tbodyData={ecosystem_dlt}/>


