export interface ExportableBytes {
  settings: ExportSettingsImage | ExportSettingsPDF | ExportSettingsSVG;
  bytes?: Uint8Array;
}

export interface AppIconEntry {
  idiom: string;
  size: string;
  scale: string;
  filename: string;
  exportableBytes: ExportableBytes;
}
