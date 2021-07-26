> mkdir sbc
> cd sbc
> touch genesis.json
> cat>genesis.json<<EOF
    "ethash": {}
  },
  "difficulty": "1",
  "gasLimit": "0x2fefd8"
}
>
> {
>   "config": {
>     "chainId": 1103,
>     "homesteadBlock": 0,
>     "eip150Block": 0,
>     "eip155Block": 0,
>     "eip158Block": 0,
>     "byzantiumBlock": 0,
>     "constantinopleBlock": 0,
>     "petersburgBlock": 0,
>     "ethash": {}
>   },
>   "difficulty": "1",
>   "gasLimit": "0x2fefd8"
> }
> EOF
