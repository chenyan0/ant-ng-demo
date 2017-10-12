import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.less']
})

export class DashboardComponent implements OnInit {

  dataset = [
    [
      10,
      52,
      200,
      334,
      390,
      330,
      220
    ]
  ];
  chartOption3 = {
    "color": ["#3398DB"],
    "tooltip": {
      "trigger": "axis",
      "axisPointer": {      // 坐标轴指示器，坐标轴触发有效
        "type": "shadow"          // 默认为直线，可选为："line" | "shadow"
      }
    },
    "grid": {
      "left": "3%",
      "right": "4%",
      "bottom": "3%",
      "containLabel": true
    },
    "xAxis": [
      {
        "type": "category",
        "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "axisTick": {
          "alignWithLabel": true
        }
      }
    ],
    "yAxis": [
      {
        "type": "value"
      }
    ],
    "series": [
      {
        "name": "直接访问",
        "type": "bar",
        "barWidth": "30%"
      }
    ]
  }
  chartLoading = false;
  chartOption2 = {
    "tooltip": {
      "trigger": "item",
      "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "series": [
      {
        "name": "访问来源",
        "type": "pie",
        "selectedMode": "single",
        "radius": [
          0,
          "30%"
        ],
        "label": {
          "normal": {
            "position": "inner"
          }
        },
        "labelLine": {
          "normal": {
            "show": false
          }
        },
        "data": [
          {
            "value": 335,
            "name": "直达",
            "selected": true
          },
          {
            "value": 679,
            "name": "营销广告"
          },
          {
            "value": 1548,
            "name": "搜索引擎"
          }
        ]
      },
      {
        "name": "访问来源",
        "type": "pie",
        "radius": [
          "40%",
          "55%"
        ],
        "data": [
          {
            "value": 335,
            "name": "直达"
          },
          {
            "value": 310,
            "name": "邮件营销"
          },
          {
            "value": 234,
            "name": "联盟广告"
          },

        ]
      }
    ]
  };
  chartOption = {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '0',
      right: '14%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      },


    ]
  }

  constructor() { }

  ngOnInit() {

  }
}