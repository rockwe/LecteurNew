// Components/Settingsings.js

import React from 'react'
import { View, Text, ScrollView ,TextInput} from 'react-native';
import styles from './styles';
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from './TouchableOpacity';


class Settings extends React.Component {

  constructor(propos){
    super(propos)
    this.state = {
      //filter: this.props.filterType,
      filter: {search: '', designation: ''  },
      actionFilter: this.props.actionFilter,
      actionSwitchArticle: this.props.actionSwitchArticle,
  };
  }

  render() {
      const { filter, actionFilter, actionSwitchArticle } = this.state;
    return (
        <View style={styles.containerModal}>
          <Feather style={styles.modalIcon} name="filter" size={40} />
          <Text style={styles.modalTitle}>FILTRER VOS NEW</Text>
          <ScrollView>
            <View style={styles.containerScroll}>
              <View style={styles.containerSection}>
                <TextInput
                    placeholder="Auteur"
                    style={styles.textInput}
                    defaultValue={filter.search}
                    onChange={(value) =>
                        this.changeValues('search', value)
                    }
                />
              </View>
              <View style={styles.containerSection}>
                <TextInput
                    placeholder="dateSort"
                    style={styles.textInput}
                    defaultValue={filter.designation}
                    onChange={(value) =>
                        this.changeValues('dateSort', value)
                    }
                />
              </View>

            </View>
          </ScrollView>
          <View style={styles.containerButton}>
            <TouchableOpacity
                style={[styles.button, styles.buttonSave]}
                onPress={() => this.props.actionSwitchArticle(this.state.filter)}
            >
              <Text style={[styles.buttonText, styles.buttonTextSave]}>
                APPLIQUER FILTRE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={actionFilter}
            >
              <Text style={[styles.buttonText, styles.buttonTextSave]}>
                Annuler
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}

export default Settings
