---
sidebar_position: 2
---

import JSONTable from '@site/src/components/ui/JSONTable';
import investors_acc from "/static/data/investors_acc.json"

# Accelerators

The more daunting tasks of pitching investors is identifying those that could suit your project. First, because most still provide funds by equity and there is little info about tokenized investors. Also because there is not a good classification of areas of interest, so you need to analyse up to [14.000 websites](https://alphagrowth.io/investors).

To make this task easier for Catallactic Adopters, we include below a list of VCs that maybe potentially interested in this kind of project. The list will be completed over the time. If you want to be included in the list, please, let us know.

<JSONTable theadData={Object.keys(investors_acc[0])} tbodyData={investors_acc}/>