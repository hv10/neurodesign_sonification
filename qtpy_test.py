import sys
from bitalino import BITalino
from Qt.QtWidgets import QApplication, QPushButton, QWidget, QVBoxLayout

app = QApplication(sys.argv)
app.setStyle("Material")
window = QWidget()
layout = QVBoxLayout()
layout.addWidget(QPushButton("Top"))
layout.addWidget(QPushButton("Bottom"))
window.setLayout(layout)
window.show()
sys.exit(app.exec_())
