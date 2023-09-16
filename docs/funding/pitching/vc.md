---
sidebar_position: 2
---

import JSONTable from '@site/src/components/ui/JSONTable';
import investors_vc from "/static/data/investors_vc.json"

# VCs

The more daunting tasks of pitching investors is identifying those that could suit our project. To make this task easier for Catallactic Adopters, we include below a list of VCs that maybe potentially interested in this kind of project. The list will be completed over the time. If you want to be included in the list, please, let us know.

<JSONTable theadData={Object.keys(investors_vc[0])} tbodyData={investors_vc}/>