---
sidebar_position: 10
---

import JSONTable from '@site/src/components/ui/JSONTable';
import auditor from "/static/data/auditor.json"

# Audit


<JSONTable theadData={Object.keys(auditor[0])} tbodyData={auditor}/>
