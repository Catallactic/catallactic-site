---
sidebar_position: 2
---

import JSONTable from '@site/src/components/ui/JSONTable';
import investors_inc from "/static/data/investors_inc.json"

# Incubators

<JSONTable theadData={Object.keys(investors_inc[0])} tbodyData={investors_inc}/>