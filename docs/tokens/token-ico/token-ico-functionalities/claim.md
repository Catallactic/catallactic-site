---
sidebar_position: 3
---

# Claim



| Token Type           | Strategy                                                       | Standalone                   | Diamond                   |
|----------------------|----------------------------------------------------------------|------------------------------|---------------------------|
|                      | ... to ICO                                                     | Must Burn                    | Must Burn                 |
|                      | ... to Minted Role of MintedCrowsale                           | Must Burn                    | Must Burn                 |
| Preminted Token      | ... to Other (Owner / Token / Liquidity Wallet)                | Must Approve + Burn          | Must Approve + Burn       |
|                      | AllowanceCrowdsales                                            | Must Burn                    | Must Burn                 |
|                      | Issuer mints to ICO                                            | Use _mint                    | Use _mint                 |
|                      | Issuer mints to Other (Owner / Token / Liquidity Wallet)       | Use Mint + Approve + Burn    | Use Mint + Approve + Burn |
|                      | Investors Mints to himself on Token                            | Use Mint                     | Use Mint                  |
|                      | ICO mints to ICO                                               | Use Mint                     | Investor only Claims      |
| No Preminted Token   | ICO mints to Other (Owner / Token / Liquidity Wallet)          | Use Mint + Approve           | Use Mint + Approve        |
|                      | Investors Mints to himself on ICO                              | Use Mint                     | Investor only Claims      |

