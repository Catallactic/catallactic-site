---
sidebar_position: 2
---

import JSONTable from '@site/src/components/ui/JSONTable';
import investors_inc from "/static/data/investors_inc.json"

# Incubators

There are 2 kind of incubators / accelerators. Those preparing you for an ICO and those preparing you for a demo day to investors. Only the former are inclluded in the list below as they are the ones that respect decentralization principles.

<JSONTable theadData={Object.keys(investors_inc[0])} tbodyData={investors_inc}/>