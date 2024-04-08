---
sidebar_position: 2
---

import JSONTable from '@site/src/components/ui/JSONTable';
import investors_vc from "/static/data/investors_vc.json"

# VCs

There are 2 kind of investors. Those investing tokens and those investing equity. Only the former are inclluded in the list below as they are the ones that respect decentralization principles.

<JSONTable theadData={Object.keys(investors_vc[0])} tbodyData={investors_vc}/>