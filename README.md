# DS lab 9

### rs.status()

```json
{
	"set" : "rs0",
	"date" : ISODate("2019-11-01T18:03:57.344Z"),
	"myState" : 1,
	"term" : NumberLong(1),
	"syncingTo" : "",
	"syncSourceHost" : "",
	"syncSourceId" : -1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"majorityVoteCount" : 2,
	"writeMajorityCount" : 2,
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1572631432, 1),
			"t" : NumberLong(1)
		},
		"lastCommittedWallTime" : ISODate("2019-11-01T18:03:52.802Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1572631432, 1),
			"t" : NumberLong(1)
		},
		"readConcernMajorityWallTime" : ISODate("2019-11-01T18:03:52.802Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1572631432, 1),
			"t" : NumberLong(1)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1572631432, 1),
			"t" : NumberLong(1)
		},
		"lastAppliedWallTime" : ISODate("2019-11-01T18:03:52.802Z"),
		"lastDurableWallTime" : ISODate("2019-11-01T18:03:52.802Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1572631412, 1),
	"lastStableCheckpointTimestamp" : Timestamp(1572631412, 1),
	"electionCandidateMetrics" : {
		"lastElectionReason" : "electionTimeout",
		"lastElectionDate" : ISODate("2019-11-01T08:19:10.904Z"),
		"termAtElection" : NumberLong(1),
		"lastCommittedOpTimeAtElection" : {
			"ts" : Timestamp(0, 0),
			"t" : NumberLong(-1)
		},
		"lastSeenOpTimeAtElection" : {
			"ts" : Timestamp(1572596340, 1),
			"t" : NumberLong(-1)
		},
		"numVotesNeeded" : 2,
		"priorityAtElection" : 1,
		"electionTimeoutMillis" : NumberLong(10000),
		"numCatchUpOps" : NumberLong(27017),
		"newTermStartDate" : ISODate("2019-11-01T08:19:11.804Z"),
		"wMajorityWriteAvailabilityDate" : ISODate("2019-11-01T08:19:12.477Z")
	},
	"members" : [
		{
			"_id" : 0,
			"name" : "first_vpc:27017",
			"ip" : "172.31.32.190",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 35287,
			"optime" : {
				"ts" : Timestamp(1572631432, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T18:03:52Z"),
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1572596350, 1),
			"electionDate" : ISODate("2019-11-01T08:19:10Z"),
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		},
		{
			"_id" : 1,
			"name" : "second_vpc:27017",
			"ip" : "172.31.37.107",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 35096,
			"optime" : {
				"ts" : Timestamp(1572631432, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572631432, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T18:03:52Z"),
			"optimeDurableDate" : ISODate("2019-11-01T18:03:52Z"),
			"lastHeartbeat" : ISODate("2019-11-01T18:03:55.541Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T18:03:55.541Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "first_vpc:27017",
			"syncSourceHost" : "first_vpc:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		},
		{
			"_id" : 2,
			"name" : "third_vpc:27017",
			"ip" : "172.31.44.220",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 35096,
			"optime" : {
				"ts" : Timestamp(1572631432, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572631432, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T18:03:52Z"),
			"optimeDurableDate" : ISODate("2019-11-01T18:03:52Z"),
			"lastHeartbeat" : ISODate("2019-11-01T18:03:55.542Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T18:03:55.880Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "first_vpc:27017",
			"syncSourceHost" : "first_vpc:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572631432, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1572631432, 1)
}
``` 

### rs.conf()
```json
{
	"_id" : "rs0",
	"version" : 1,
	"protocolVersion" : NumberLong(1),
	"writeConcernMajorityJournalDefault" : true,
	"members" : [
		{
			"_id" : 0,
			"host" : "first_vpc:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 1,
			"host" : "second_vpc:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 2,
			"host" : "third_vpc:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		}
	],
	"settings" : {
		"chainingAllowed" : true,
		"heartbeatIntervalMillis" : 2000,
		"heartbeatTimeoutSecs" : 10,
		"electionTimeoutMillis" : 10000,
		"catchUpTimeoutMillis" : -1,
		"catchUpTakeoverDelayMillis" : 30000,
		"getLastErrorModes" : {
			
		},
		"getLastErrorDefaults" : {
			"w" : 1,
			"wtimeout" : 0
		},
		"replicaSetId" : ObjectId("5dbbea742679f6df9d9e097e")
	}
}
```

### Screenshot
![](./app-sceenshot.png)

## After shutdown

### rs.status
```json
{
	"set" : "rs0",
	"date" : ISODate("2019-11-01T18:18:21.206Z"),
	"myState" : 2,
	"term" : NumberLong(2),
	"syncingTo" : "second_vpc:27017",
	"syncSourceHost" : "second_vpc:27017",
	"syncSourceId" : 1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"majorityVoteCount" : 2,
	"writeMajorityCount" : 2,
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1572632295, 1),
			"t" : NumberLong(2)
		},
		"lastCommittedWallTime" : ISODate("2019-11-01T18:18:15.830Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1572632295, 1),
			"t" : NumberLong(2)
		},
		"readConcernMajorityWallTime" : ISODate("2019-11-01T18:18:15.830Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1572632295, 1),
			"t" : NumberLong(2)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1572632295, 1),
			"t" : NumberLong(2)
		},
		"lastAppliedWallTime" : ISODate("2019-11-01T18:18:15.830Z"),
		"lastDurableWallTime" : ISODate("2019-11-01T18:18:15.830Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1572632255, 1),
	"lastStableCheckpointTimestamp" : Timestamp(1572632255, 1),
	"members" : [
		{
			"_id" : 0,
			"name" : "first_vpc:27017",
			"ip" : "172.31.32.190",
			"health" : 0,
			"state" : 8,
			"stateStr" : "(not reachable/healthy)",
			"uptime" : 0,
			"optime" : {
				"ts" : Timestamp(0, 0),
				"t" : NumberLong(-1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(0, 0),
				"t" : NumberLong(-1)
			},
			"optimeDate" : ISODate("1970-01-01T00:00:00Z"),
			"optimeDurableDate" : ISODate("1970-01-01T00:00:00Z"),
			"lastHeartbeat" : ISODate("2019-11-01T18:18:20.983Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T18:12:53.562Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "Error connecting to first_vpc:27017 (172.31.32.190:27017) :: caused by :: No route to host",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"configVersion" : -1
		},
		{
			"_id" : 1,
			"name" : "second_vpc:27017",
			"ip" : "172.31.37.107",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 35960,
			"optime" : {
				"ts" : Timestamp(1572632295, 1),
				"t" : NumberLong(2)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572632295, 1),
				"t" : NumberLong(2)
			},
			"optimeDate" : ISODate("2019-11-01T18:18:15Z"),
			"optimeDurableDate" : ISODate("2019-11-01T18:18:15Z"),
			"lastHeartbeat" : ISODate("2019-11-01T18:18:20.771Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T18:18:19.299Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1572631975, 1),
			"electionDate" : ISODate("2019-11-01T18:12:55Z"),
			"configVersion" : 1
		},
		{
			"_id" : 2,
			"name" : "third_vpc:27017",
			"ip" : "172.31.44.220",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 36115,
			"optime" : {
				"ts" : Timestamp(1572632295, 1),
				"t" : NumberLong(2)
			},
			"optimeDate" : ISODate("2019-11-01T18:18:15Z"),
			"syncingTo" : "second_vpc:27017",
			"syncSourceHost" : "second_vpc:27017",
			"syncSourceId" : 1,
			"infoMessage" : "",
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572632295, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1572632295, 1)
```

### rs.conf()
```json
{
	"_id" : "rs0",
	"version" : 1,
	"protocolVersion" : NumberLong(1),
	"writeConcernMajorityJournalDefault" : true,
	"members" : [
		{
			"_id" : 0,
			"host" : "first_vpc:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 1,
			"host" : "second_vpc:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 2,
			"host" : "third_vpc:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		}
	],
	"settings" : {
		"chainingAllowed" : true,
		"heartbeatIntervalMillis" : 2000,
		"heartbeatTimeoutSecs" : 10,
		"electionTimeoutMillis" : 10000,
		"catchUpTimeoutMillis" : -1,
		"catchUpTakeoverDelayMillis" : 30000,
		"getLastErrorModes" : {
			
		},
		"getLastErrorDefaults" : {
			"w" : 1,
			"wtimeout" : 0
		},
		"replicaSetId" : ObjectId("5dbbea742679f6df9d9e097e")
	}
```
 
 ### Application
 
 ![](./app-sceenshot-after.png)