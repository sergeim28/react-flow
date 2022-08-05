const routes = {
  data: {
    ec2_route_tables: [
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-5dca3934",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-8ac737e3",
          },
        ],
        route_table_id: "rtb-5dca3934",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-b46389dd",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-daf90eb3",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-ae9c07ca",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-f71b1193",
          },
        ],
        route_table_id: "rtb-ae9c07ca",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
        ],
        vpc_id: "vpc-f0cc1594",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-842fc2ed",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-c4638fad",
          },
        ],
        route_table_id: "rtb-842fc2ed",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-aa27cec3",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-5da44934",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-b30ee2da",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-4f13ff26",
          },
        ],
        route_table_id: "rtb-b30ee2da",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-3b8e6352",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-e92ec280",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-057c7a9da9ddebe98",
            RouteTableId: "rtb-0805c57b6a2844a3c",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-07c2b79d5f616e997",
          },
          {
            Main: false,
            SubnetId: "subnet-065924a0630706960",
            RouteTableId: "rtb-0805c57b6a2844a3c",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0d70e0b8695e33dec",
          },
        ],
        route_table_id: "rtb-0805c57b6a2844a3c",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.16.0.0/16",
          },
          {
            State: "blackhole",
            Origin: "CreateRoute",
            GatewayId: "igw-0686e699025c3214d",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-088c4585fdca0841c",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-09b8e82a2f9295427",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0bf41629357f9300f",
          },
        ],
        route_table_id: "rtb-09b8e82a2f9295427",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.16.0.0/16",
          },
        ],
        vpc_id: "vpc-088c4585fdca0841c",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-dda438b4",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-dca438b5",
          },
        ],
        route_table_id: "rtb-dda438b4",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "blackhole",
            Origin: "CreateRoute",
            GatewayId: "igw-d9a438b0",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-c4a438ad",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-e4eb088d",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-a102e1c8",
          },
        ],
        route_table_id: "rtb-e4eb088d",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-0e7d9c67",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-cb8b68a2",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-1806e271",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-69719500",
          },
        ],
        route_table_id: "rtb-1806e271",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-a4c521cd",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-4b0bef22",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-a56688cc",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-382fc151",
          },
        ],
        route_table_id: "rtb-a56688cc",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-21ea0748",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-b7608fde",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-0f6f60ab1734deaf8",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-09dc9ca18d56d2388",
          },
        ],
        route_table_id: "rtb-0f6f60ab1734deaf8",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.37.0.0/16",
          },
        ],
        vpc_id: "vpc-0bb30c022bda734f2",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-f45fbc9d",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-69b35100",
          },
        ],
        route_table_id: "rtb-f45fbc9d",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-26a4474f",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-344caf5d",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-962cecff",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-8bf637e2",
          },
        ],
        route_table_id: "rtb-962cecff",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.31.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-e956a480",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-0ed12967",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-c549c3ea",
            RouteTableId: "rtb-538f2a2e",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-8b1af1f7",
          },
          {
            Main: false,
            SubnetId: "subnet-277d2d6c",
            RouteTableId: "rtb-538f2a2e",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-f718f38b",
          },
          {
            Main: false,
            SubnetId: "subnet-14fe7049",
            RouteTableId: "rtb-538f2a2e",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-2212f95e",
          },
        ],
        route_table_id: "rtb-538f2a2e",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/22",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-0a679f2bc4e4293ee",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-c46749bc",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-548f2a29",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-d91df6a5",
          },
        ],
        route_table_id: "rtb-548f2a29",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/22",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-312e0a48",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-c46749bc",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-0eec2fa03a4f274eb",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-099321e79fddf0c3f",
          },
        ],
        route_table_id: "rtb-0eec2fa03a4f274eb",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
        ],
        vpc_id: "vpc-092eb20aa971a6e0b",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-03c0d0195faed1d87",
            RouteTableId: "rtb-09ec0112cb9300d64",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-044c24de0a0ad2b9c",
          },
        ],
        route_table_id: "rtb-09ec0112cb9300d64",
        routes: [
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "10.2.0.0/16",
            VpcPeeringConnectionId: "pcx-05914d2a7855442ce",
          },
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-0f29bbf10a7834c5b",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-092eb20aa971a6e0b",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-0af04cf572bf63f84",
            RouteTableId: "rtb-03b9aaf1ee312b26b",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-063aeaa89f072d1d6",
          },
          {
            Main: false,
            SubnetId: "subnet-07bafc43ca62cf9af",
            RouteTableId: "rtb-03b9aaf1ee312b26b",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-03183498ec8eec112",
          },
        ],
        route_table_id: "rtb-03b9aaf1ee312b26b",
        routes: [
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "10.2.0.0/16",
            VpcPeeringConnectionId: "pcx-05914d2a7855442ce",
          },
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-0b3e493409defe52b",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-092eb20aa971a6e0b",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-07c0f431768f35275",
            RouteTableId: "rtb-000107807c542d03b",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0711f6017e9feca78",
          },
        ],
        route_table_id: "rtb-000107807c542d03b",
        routes: [
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "10.2.0.0/16",
            VpcPeeringConnectionId: "pcx-05914d2a7855442ce",
          },
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-074d0784bb086cc9d",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-092eb20aa971a6e0b",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-0a428a7d",
            RouteTableId: "rtb-dcbae3b9",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-918484f4",
          },
          {
            Main: false,
            SubnetId: "subnet-d0afa5f8",
            RouteTableId: "rtb-dcbae3b9",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-978484f2",
          },
        ],
        route_table_id: "rtb-dcbae3b9",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.30.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "192.168.0.0/16",
            VpcPeeringConnectionId: "pcx-d9fe02b0",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-bdca06d8",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-d5339bb0",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-e00da385",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-a1ee52c4",
          },
        ],
        route_table_id: "rtb-e00da385",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.30.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "192.168.0.0/16",
            VpcPeeringConnectionId: "pcx-d9fe02b0",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-bdca06d8",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-d5339bb0",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-ac6983f5",
            RouteTableId: "rtb-258ed440",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-3a323e5f",
          },
        ],
        route_table_id: "rtb-258ed440",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.30.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "192.168.0.0/16",
            VpcPeeringConnectionId: "pcx-d9fe02b0",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-bdca06d8",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-d5339bb0",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-09cd76e4aa6679242",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-03ae8e4353c186163",
          },
        ],
        route_table_id: "rtb-09cd76e4aa6679242",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
        ],
        vpc_id: "vpc-0a3b113a39abd23b8",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-029787aafcfa166c4",
            RouteTableId: "rtb-00bf8ac537578f16c",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0a4cef2732f73264d",
          },
        ],
        route_table_id: "rtb-00bf8ac537578f16c",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "vpce-0c08fc16ed3eafc57",
            DestinationPrefixListId: "pl-63a5400a",
          },
        ],
        vpc_id: "vpc-0a3b113a39abd23b8",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-08483162468e6eff4",
            RouteTableId: "rtb-0ad03b247047601a2",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0a4c1875610b8c608",
          },
          {
            Main: false,
            SubnetId: "subnet-019fc22d86d5ea0e3",
            RouteTableId: "rtb-0ad03b247047601a2",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0074ea0c90086f023",
          },
        ],
        route_table_id: "rtb-0ad03b247047601a2",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-0f3f7cc1b3f1a9528",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-0a3b113a39abd23b8",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-0d216d4b97a39a7f0",
            RouteTableId: "rtb-0f9d3f1e7a51a6069",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0dd54a379cce9f687",
          },
        ],
        route_table_id: "rtb-0f9d3f1e7a51a6069",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "vpce-0c08fc16ed3eafc57",
            DestinationPrefixListId: "pl-63a5400a",
          },
        ],
        vpc_id: "vpc-0a3b113a39abd23b8",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-40b2b93d",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-a649d6da",
          },
        ],
        route_table_id: "rtb-40b2b93d",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.1.0.0/16",
          },
        ],
        vpc_id: "vpc-a6cf26dd",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-e1366faa",
            RouteTableId: "rtb-d05be7ad",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-5a03fd26",
          },
          {
            Main: false,
            SubnetId: "subnet-30c4571f",
            RouteTableId: "rtb-d05be7ad",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-6506f819",
          },
          {
            Main: false,
            SubnetId: "subnet-901387cd",
            RouteTableId: "rtb-d05be7ad",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-247d8358",
          },
        ],
        route_table_id: "rtb-d05be7ad",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/22",
          },
          {
            State: "blackhole",
            Origin: "CreateRoute",
            NatGatewayId: "nat-05c7778a9c983a755",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-4b90a633",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-f5a81488",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-4635cb3a",
          },
        ],
        route_table_id: "rtb-f5a81488",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/22",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-bb7559c2",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-4b90a633",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-20236469",
            RouteTableId: "rtb-13d6ec75",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-688f6210",
          },
        ],
        route_table_id: "rtb-13d6ec75",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-00d80e00f5f1a74ff",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-af559cc9",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-eb2caeb0",
            RouteTableId: "rtb-305a4b56",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-d25cbeaa",
          },
          {
            Main: false,
            SubnetId: "subnet-0b537a42",
            RouteTableId: "rtb-305a4b56",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-ee9b4196",
          },
        ],
        route_table_id: "rtb-305a4b56",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-fcc3549b",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-af559cc9",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-12d6ec74",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-40111a39",
          },
        ],
        route_table_id: "rtb-12d6ec74",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
        ],
        vpc_id: "vpc-af559cc9",
      },
      {
        associations: [],
        route_table_id: "rtb-bacd69dc",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/24",
          },
        ],
        vpc_id: "vpc-07195460",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-836bb1e5",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-3ebb7747",
          },
        ],
        route_table_id: "rtb-836bb1e5",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/24",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-4e6f732a",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-07195460",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-0f68628db65154366",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0468586b3baee3a85",
          },
        ],
        route_table_id: "rtb-0f68628db65154366",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.30.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-0ed87daa6453aa6c6",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-0b8811ee55825bc58",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-875dc0ff",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-a0f78bdb",
          },
        ],
        route_table_id: "rtb-875dc0ff",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
        ],
        vpc_id: "vpc-f4f4288d",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-e47cd8c8",
            RouteTableId: "rtb-625fc21a",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-d2f08ca9",
          },
          {
            Main: false,
            SubnetId: "subnet-8c4db8e8",
            RouteTableId: "rtb-625fc21a",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-63915019",
          },
        ],
        route_table_id: "rtb-625fc21a",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
          {
            State: "blackhole",
            Origin: "CreateRoute",
            DestinationCidrBlock: "10.24.0.0/16",
            VpcPeeringConnectionId: "pcx-06e9adf3dab51b21a",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-b456dfd2",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-f4f4288d",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-0cd8395bc3cd6628f",
            RouteTableId: "rtb-020386d6de52456e3",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0d27c49057e645b8a",
          },
          {
            Main: false,
            SubnetId: "subnet-0098c9281e327110b",
            RouteTableId: "rtb-020386d6de52456e3",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0dbcac5dbfeff1b18",
          },
          {
            Main: false,
            SubnetId: "subnet-069b734f53a4f02f7",
            RouteTableId: "rtb-020386d6de52456e3",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0eed7fc0e6bf68479",
          },
        ],
        route_table_id: "rtb-020386d6de52456e3",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.26.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-08a5ceb42cd4ffd89",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-066d4393001c59c7f",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-08beaf9bec5446957",
            RouteTableId: "rtb-0b4ecfeacea86ba80",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-06b7b675a5baa57f4",
          },
          {
            Main: false,
            SubnetId: "subnet-03167677279b6f48f",
            RouteTableId: "rtb-0b4ecfeacea86ba80",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0cb8076bca6fbde86",
          },
          {
            Main: false,
            SubnetId: "subnet-062589ae32516c10e",
            RouteTableId: "rtb-0b4ecfeacea86ba80",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-079436e0e9fee7236",
          },
        ],
        route_table_id: "rtb-0b4ecfeacea86ba80",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.26.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-08a5ceb42cd4ffd89",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-066d4393001c59c7f",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-06d1dcac7595d4051",
            RouteTableId: "rtb-02d364863726a2b0a",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0520ef60a1e683f34",
          },
        ],
        route_table_id: "rtb-02d364863726a2b0a",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.26.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-0fa924be7acaf5a02",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-066d4393001c59c7f",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-02972bf7cdf793e93",
            RouteTableId: "rtb-01584108a639ce121",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0d4030f8321092da1",
          },
          {
            Main: false,
            SubnetId: "subnet-08d5b7a4e1de50b33",
            RouteTableId: "rtb-01584108a639ce121",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0ec7b1db0f34136c6",
          },
        ],
        route_table_id: "rtb-01584108a639ce121",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.26.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-0abc3766627ccad80",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-066d4393001c59c7f",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-08ad86a226509fc89",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0611cf27bd5b2a3bd",
          },
        ],
        route_table_id: "rtb-08ad86a226509fc89",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "172.26.0.0/16",
          },
        ],
        vpc_id: "vpc-066d4393001c59c7f",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-01a10546b6b5a892f",
            RouteTableId: "rtb-012c904532c1535f4",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0f00b2ee8517f24e2",
          },
        ],
        route_table_id: "rtb-012c904532c1535f4",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-0e51a344dec0aa383",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-01f9fc0db507a3e7d",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-0d697bd677fbd11f3",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0f84e41f9d305609d",
          },
        ],
        route_table_id: "rtb-0d697bd677fbd11f3",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
        ],
        vpc_id: "vpc-01f9fc0db507a3e7d",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-0d8712c6a441da107",
            RouteTableId: "rtb-0e1da951723a58414",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-06e423e7c296f6cb1",
          },
          {
            Main: false,
            SubnetId: "subnet-0ee5bd9171a809ca9",
            RouteTableId: "rtb-0e1da951723a58414",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-0c8ced12175a544d2",
          },
        ],
        route_table_id: "rtb-0e1da951723a58414",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-0e6c2418d07d11fc9",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-01f9fc0db507a3e7d",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-07c5fd5c7e8d14fab",
            RouteTableId: "rtb-0d77551b93754cfc8",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-08ab1b9faffdf4175",
          },
        ],
        route_table_id: "rtb-0d77551b93754cfc8",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.192.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            NatGatewayId: "nat-061c0f997bda7ed6d",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-01f9fc0db507a3e7d",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-df267bba",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-ad7772c8",
          },
        ],
        route_table_id: "rtb-df267bba",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "192.168.0.0/16",
          },
        ],
        vpc_id: "vpc-48d2912d",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-4de25b14",
            RouteTableId: "rtb-de267bbb",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-ac7772c9",
          },
        ],
        route_table_id: "rtb-de267bbb",
        routes: [
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "172.30.0.0/16",
            VpcPeeringConnectionId: "pcx-d9fe02b0",
          },
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "192.168.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "10.180.0.0/16",
            VpcPeeringConnectionId: "pcx-f2fb6e9b",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-99ce42fc",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-48d2912d",
      },
      {
        associations: [
          {
            Main: true,
            RouteTableId: "rtb-386bb444",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-1f91af63",
          },
        ],
        route_table_id: "rtb-386bb444",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
        ],
        vpc_id: "vpc-eed47c95",
      },
      {
        associations: [
          {
            Main: false,
            SubnetId: "subnet-abafa2cf",
            RouteTableId: "rtb-4e69b632",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-5e9aa422",
          },
          {
            Main: false,
            SubnetId: "subnet-e77a5cba",
            RouteTableId: "rtb-4e69b632",
            AssociationState: {
              State: "associated",
            },
            RouteTableAssociationId: "rtbassoc-7696a80a",
          },
        ],
        route_table_id: "rtb-4e69b632",
        routes: [
          {
            State: "active",
            Origin: "CreateRouteTable",
            GatewayId: "local",
            DestinationCidrBlock: "10.0.0.0/16",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            DestinationCidrBlock: "10.2.0.0/16",
            VpcPeeringConnectionId: "pcx-0c31c9ce0038f4510",
          },
          {
            State: "active",
            Origin: "CreateRoute",
            GatewayId: "igw-1c498064",
            DestinationCidrBlock: "0.0.0.0/0",
          },
        ],
        vpc_id: "vpc-eed47c95",
      },
    ],
  },
};
