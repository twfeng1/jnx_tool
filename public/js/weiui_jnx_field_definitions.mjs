
const jnx_field_definitions =

    {
        "MessageType": {
            "type": "JNX_Alpha",
            "len": 1,
            "validValues": {
                "O": "Enter Order",
                "U": " If PktType==U : Replace| PktTyp==S : Replaced ",
                "X": "Cancel Order ",
                "A": "Order Accepted",
                "C": "Order Canceled ",
                "J": "Order Rejected ",
                "E": "Order Executed ",
                "D": "Order AIQ Canceled",
                "S": "System Event "
            }
        },
        "OrderToken": {
            "type": "JNX_Token",
            "len": 4,
            "validValues": {}
        },
        "ClientReference": {
            "type": "JNX_Alpha",
            "len": 10,
            "validValues": {}
        },
        "BuySellIndicator": {
            "type": "JNX_Alpha",
            "len": 1,
            "validValues": {
                "B": "Buy",
                "S": "Sell",
                "T": "Short sell",
                "E": "Short sell exempt"
            }
        },
        "Quantity": {
            "type": "JNX_Integer",
            "len": 4,
            "validValues": {}
        },
        "OrderbookId": {
            "type": "JNX_Integer",
            "description":"4 digit Quick code",
            "len": 4,
            "validValues": {}
        },
        "Group": {
            "type": "JNX_Alpha",
            "description":"Orderbook group identifier.",
            "len": 4,
            "validValues": {
                "DAY": "Daytime J-Market",
                "NGHT ": "Nighttime J-Market",
                "DAYX": "X-Market",
                "DAYU": "U-Market"
            }
        },
        "Price": {
            "type": "JNX_Integer",
            "len": 4,
            "validValues": {}
        },
        "TimeinForce": {
            "type": "JNX_Integer",
            "description":'Specifies how long the order remains in effect.',
            "len": 4,
            "validValues": {
                "0": "Immediate",
                "99999": "Day"
            }
        },
        "FirmId": {
            "type": "JNX_Integer",
            "len": 4,
            "validValues": {}
        },
        "Display": {
            "type": "JNX_Alpha",
            "description":"Display as accepted.",
            "len": 1,
            "validValues": {
                "P": " Post-only"
            }
        },
        "Capacity": {
            "type": "JNX_Alpha",
            "description":"Capacity of the firm placing the order as entered.",
            "len": 1,
            "validValues": {
                "A": "Agency",
                "P": "Principal"
            }
        },
        "MinimumQuantity": {
            "type": "JNX_Integer",
            "description":"Specifies the minimum acceptable quantity to execute." +
                "Non zero values are only supported for immediate orders.",
            "len": 4,
            "validValues": {}
        },
        "OrderClassification": {
            "type": "JNX_Alpha",
            "description":"High Frequency Trading (HFT) order classification.",
            "len": 1,
            "validValues": {
                "1": "Non HFT",
                "3": "HFT market making strategy",
                "4": "HFT arbitrage strategy",
                "5": "HFT directional strategy",
                "6": "HFT other strategy"
            }
        },
        "CashMarginType": {
            "type": "JNX_Alpha",
            "len": 1,
            "validValues": {
                "1": "Cash",
                "2": "Margin open (Negotiable)",
                "3": "Margin close (Negotiable)",
                "4": "Margin open (Standardized)",
                "5": "Margin close (Standardized)"
            }
        },
        "ExistingOrderToken": {
            "type": "JNX_Token",
            "len": 4,
            "validValues": {}
        },
        "ReplacementOrderToken": {
            "type": "JNX_Token",
            "len": 4,
            "validValues": {}
        },
        "Timestamp": {
            "type": "JNX_Timestamp",
            "description":"Number of nanoseconds past midnight.",
            "len": 8,
            "validValues": {}
        },
        "SystemEvent": {
            "type": "JNX_Alpha",
            "len": 1,
            "validValues": {
                "S": "Start Of Day - Always the first message. Indicates the market is open and ready to start accepting orders",
                "E": "End Of Day - Indicates the market is closed and will not accept any new orders. There will be no further executions."
            }
        },
        "OrderNumber": {
            "type": "JNX_Integer",
            "len": 8,
            "validValues": {}
        },
        "OrderState": {
            "type": "JNX_Alpha",
            "description":"Day unique reference number of the order.",
            "len": 1,
            "validValues": {
                "L": "Live ",
                "D": "Dead"
            }
        },
        "PreviousOrderToken": {
            "type": "JNX_Token",
            "len": 4,
            "validValues": {}
        },
        "DecrementQuantity": {
            "type": "JNX_Integer",
            "description":"Number of shares decremented from the order." +
                "This number is incremental, not cumulative.",
            "len": 4,
            "validValues": {}
        },
        "OrderCanceledReason": {
            "type": "JNX_Alpha",
            "len": 1,
            "validValues": {
                "U": "User requested the order to be canceled. Sent in response to a Cancel Order Message or a Replace Order Message.",
                "L": "User logged off.",
                "S": "This order was manually canceled by a supervisory terminal. For example,emergency withdraw per user's request or the user got suspended.",
                "I": "An order with 'Immediate' Time In Force was executed and with no further matches available on the book the remaining quantity was canceled.",
                "M": "Order expired during match.",
                "X": "Invalid price.",
                "Z": "Invalid quantity.",
                "N": "Invalid minimum quantity.",
                "Y": "Invalid order type.",
                "D": "Invalid display type.",
                "V": "Exceeded order value limit.",
                "i": "Short sell order restriction.",
                "R": "Order not allowed at this time.",
                "F": "Flow control is enabled and this OUCH port is being throttled.",
                "G": "Margin order canceled due to margin restriction.",
                "O": "Other"
            }
        },
        "QuantityPreventedfromTrading": {
            "type": "JNX_Integer",
            "len": 4,
            "validValues": {}
        },
        "ExecutionPrice": {
            "type": "JNX_Integer",
            "len": 4,
            "validValues": {}
        },
        "LiquidityIndicator": {
            "type": "JNX_Alpha",
            "len": 1,
            "validValues": {
                "A": "Added (for the passive firm)",
                "R": "Removed (for the aggressor)"
            }
        },
        "ExecutedQuantity": {
            "type": "JNX_Integer",
            "len": 4,
            "validValues": {}
        },
        "MatchNumber": {
            "type": "JNX_Integer",
            "len": 8,
            "validValues": {}
        },
        "OrderRejectedReason": {
            "type": "JNX_Alpha",
            "len": 1,
            "validValues": {
                "H": "There is currently a trading halt so no orders can be accepted on this orderbook at this time.",
                "S": "Invalid orderbook identifier.",
                "X": "Invalid price.",
                "Z": "Invalid quantity.",
                "N": "Invalid minimum quantity.",
                "Y": "Invalid order type.",
                "D": "Invalid display type.",
                "V": "Exceeded order value limit.",
                "i": "Short sell order restriction.",
                "R": "Order not allowed at this time.",
                "F": "Flow control is enabled and this OUCH port is being throttled.",
                "G": "Invalid margin specification.",
                "L": "MPID not allowed for this port.",
                "c": "User does not have permission to enter an order on the given board.",
                "O": "Other.",

                "0x48": "H - There is currently a trading halt so no orders can be accepted on this orderbook at this time.",
                "0x53": "S - Invalid orderbook identifier.",
                "0x58": "X - Invalid price.",
                "0x5a": "Z - Invalid quantity.",
                "0x4e": "N - Invalid minimum quantity.",
                "0x59": "Y - Invalid order type.",
                "0x44": "D - Invalid display type.",
                "0x56": "V - Exceeded order value limit.",
                "0x69": "i - Short sell order restriction.",
                "0x52": "R - Order not allowed at this time.",
                "0x46": "F - Flow control is enabled and this OUCH port is being throttled.",
                "0x47": "G - Invalid margin specification.",
                "0x4c": "L - MPID not allowed for this port.",
                "0x63": "c - User does not have permission to enter an order on the given board.",
                "0x4f": "O - Other."


            }
        },
        "RequestedSequenceNumber": {
            "type": "STRING",
            "len": 20,
            "validValues": {}
        },
        "RequestedSession": {
            "type": "STRING",
            "len": 10,
            "validValues": {}
        },
        "SequenceNumber": {
            "type": "STRING",
            "len": 20,
            "validValues": {}
        },
        "Session": {
            "type": "STRING",
            "len": 10,
            "validValues": {}
        },
        "Username": {
            "type": "STRING",
            "len": 6,
            "validValues": {}
        },
        "Password": {
            "type": "STRING",
            "len": 10,
            "validValues": {}
        },
        "Text": {
            "type": "STRING",
            "len": 100,
            "validValues": {}
        },
        "RejectReasonCode": {
            "type": "STRING",
            "len": 1,
            "validValues": {
                "A": "Not Authorized. There was an invalid username and password combination in the Login Request Message.",
                "S": "Session not available. The Requested Session in the Login Request Packet was either invalid or not available."
            }
        },
        "PacketLength": {
            "type": "INTEGER",
            "len": 2,
            "validValues": {}
        },
        "PacketType": {
            "type": "STRING",
            "len": 1,
            "validValues": {
                "L": "Login Request",
                "A": "Login Accepted",
                "J": "Login Reject",
                "O": "Logout Request",
                "R": "Client Heartbeat",
                "H": "Server Heartbeat",
                "Z": "End of Session",
                "+": "Debug Packet",
                "U": "UnSequenced",
                "S": "Sequenced"
            }
        }
    }

    export {jnx_field_definitions}