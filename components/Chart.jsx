import React, { Component } from 'react';
import styles from '@/components/Chart.module.css';
class Chart extends Component {
    render() {
      const { percent, label, subLabel, color, trackColor } = this.props;
      
      // 计算圆弧角度 (SVG中100%对应360度)
      const circumference = 2 * Math.PI * 45;
      const offset = circumference - (percent / 100) * circumference;
      
      return (
        <div className={styles.container}>
          {/* 使用SVG绘制环形图 */}
          <div className={styles.chartWrapper}>
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              {/* 轨道圆环 */}
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke={trackColor || '#eee'} 
                strokeWidth="10" 
              />
              
              {/* 进度圆环 */}
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke={color || '#333'} 
                strokeWidth="10" 
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 50 50)"
              />
              
              {/* 百分比文本 */}
              <text 
                x="50" 
                y="50" 
                textAnchor="middle" 
                dominantBaseline="middle"
                className={styles.percentText}
              >
                {percent}%
              </text>
            </svg>
          </div>
          
          {/* 标签和子标签 */}
          <div className={styles.labels}>
            <h3 className={styles.label} style={{ color: color || '#333' }}>{label}</h3>
            <p className={styles.subLabel}>{subLabel}</p>
          </div>
        </div>
      );
    }
  }
  
  export default Chart;