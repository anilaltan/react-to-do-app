import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;


export const Delete = styled.button`
    justify-self: end;
    margin-right: 20px;
    width: 14px;
    height: 18px;
    margin-top: 1.875rem;
    cursor: pointer;
    border: none;
    background: white;
    .icons8-trash { 
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JkYmRiZCI+PHBhdGggZD0iTTc0LjUzMzMzLDE3LjJjLTEuNTM0MDYsLTAuMDIwODIgLTMuMDEyNDksMC41NzQgLTQuMTA0NjgsMS42NTE0NmMtMS4wOTIxOSwxLjA3NzQ2IC0xLjcwNzAzLDIuNTQ3NjcgLTEuNzA3MDQsNC4wODE4N2gtMzQuMzIxNjFjLTIuMDY3NjUsLTAuMDI5MjQgLTMuOTkwODcsMS4wNTcwOSAtNS4wMzMyMiwyLjg0M2MtMS4wNDIzNiwxLjc4NTkyIC0xLjA0MjM2LDMuOTk0NzQgMCw1Ljc4MDY2YzEuMDQyMzYsMS43ODU5MiAyLjk2NTU4LDIuODcyMjUgNS4wMzMyMiwyLjg0M2gxMDMuMmMyLjA2NzY1LDAuMDI5MjQgMy45OTA4NywtMS4wNTcwOSA1LjAzMzIyLC0yLjg0M2MxLjA0MjM2LC0xLjc4NTkyIDEuMDQyMzYsLTMuOTk0NzQgMCwtNS43ODA2NmMtMS4wNDIzNiwtMS43ODU5MiAtMi45NjU1OCwtMi44NzIyNSAtNS4wMzMyMiwtMi44NDNoLTM0LjMyMTYxYy0wLjAwMDAxLC0xLjUzNDIxIC0wLjYxNDg2LC0zLjAwNDQyIC0xLjcwNzA0LC00LjA4MTg3Yy0xLjA5MjE5LC0xLjA3NzQ2IC0yLjU3MDYxLC0xLjY3MjI4IC00LjEwNDY4LC0xLjY1MTQ2ek0zNC40LDQ1Ljg2NjY3djkxLjczMzMzYzAsNi4zMzUzMyA1LjEzMTMzLDExLjQ2NjY3IDExLjQ2NjY3LDExLjQ2NjY3aDgwLjI2NjY3YzYuMzM1MzMsMCAxMS40NjY2NywtNS4xMzEzMyAxMS40NjY2NywtMTEuNDY2Njd2LTkxLjczMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+') 50% 50% no-repeat;
        background-size: 100%; 
    }
`;

export const DeleteAll = styled.button`
    grid-column: 2;
    margin-top: 38px;
    display: flex;
    justify-self: end;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    border: none;
    cursor: pointer;
    width: 124px;
    height: 40px;
    background: #EB5757;
    border-radius: 4px;
    .icons8-trash { 
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTc0LjUzMzMzLDE3LjJjLTEuNTM0MDYsLTAuMDIwODIgLTMuMDEyNDksMC41NzQgLTQuMTA0NjgsMS42NTE0NmMtMS4wOTIxOSwxLjA3NzQ2IC0xLjcwNzAzLDIuNTQ3NjcgLTEuNzA3MDQsNC4wODE4N2gtMzQuMzIxNjFjLTIuMDY3NjUsLTAuMDI5MjQgLTMuOTkwODcsMS4wNTcwOSAtNS4wMzMyMiwyLjg0M2MtMS4wNDIzNiwxLjc4NTkyIC0xLjA0MjM2LDMuOTk0NzQgMCw1Ljc4MDY2YzEuMDQyMzYsMS43ODU5MiAyLjk2NTU4LDIuODcyMjUgNS4wMzMyMiwyLjg0M2gxMDMuMmMyLjA2NzY1LDAuMDI5MjQgMy45OTA4NywtMS4wNTcwOSA1LjAzMzIyLC0yLjg0M2MxLjA0MjM2LC0xLjc4NTkyIDEuMDQyMzYsLTMuOTk0NzQgMCwtNS43ODA2NmMtMS4wNDIzNiwtMS43ODU5MiAtMi45NjU1OCwtMi44NzIyNSAtNS4wMzMyMiwtMi44NDNoLTM0LjMyMTYxYy0wLjAwMDAxLC0xLjUzNDIxIC0wLjYxNDg2LC0zLjAwNDQyIC0xLjcwNzA0LC00LjA4MTg3Yy0xLjA5MjE5LC0xLjA3NzQ2IC0yLjU3MDYxLC0xLjY3MjI4IC00LjEwNDY4LC0xLjY1MTQ2ek0zNC40LDQ1Ljg2NjY3djkxLjczMzMzYzAsNi4zMzUzMyA1LjEzMTMzLDExLjQ2NjY3IDExLjQ2NjY3LDExLjQ2NjY3aDgwLjI2NjY3YzYuMzM1MzMsMCAxMS40NjY2NywtNS4xMzEzMyAxMS40NjY2NywtMTEuNDY2Njd2LTkxLjczMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+') 50% 50% no-repeat;
        background-size: 100%; 
    }
`;