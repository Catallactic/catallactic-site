---
sidebar_position: 2
---

# Mint / Burn



| Token Type           | Strategy                               | Standalone              | Diamond                   |
|----------------------|----------------------------------------|-------------------------|---------------------------|
|                      | Mint on Token Creation + Fair Launch   | Use _mint               | Use _mint                 |
|                      | Mint on Token Creation + ICO           | _mint + burn in ICO     | _mint + burn in ICO       |
| No Mintable Token    | Mint on Automatic LP Management        | Use _mint               | Use _mint                 |
|                      | Mint on Automatic Price Capture        | Use _mint               | Use _mint                 |
|                      | Mint on Automatic Value Capture        | Use _mint               | Use _mint                 |
|                      | Mint by Contract on ICO Purchase       | Public mint method      | Add mint to ICO           |
|                      | Mint by Contract on ICO Claim          | Public mint method      | Add mint to ICO           |
|                      | Mint by Contract on ICO Claims         | Public mint method      | Add mint to ICO           |
| Mintable Token       | Mint by Contract on Vesting Completion | Public mint method      | Add mint to Vesting       |
|                      | Mint by Contract on Operations         | Public mint method      | Add mint to Operation     |
|                      | FlashMint                              | Public mint method      | Public op mint method     |
|                      | Manual Mint by Issuer                  | Public mint method      | Public mint method        |
