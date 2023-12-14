package Probadesyat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probadesyat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РегистрВхода
 */
@Entity(name = "IISProbadesyatРегистрВхода")
@Table(schema = "public", name = "РегистрВхода")
public class RegistrVxoda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Komnata")
    @Convert("Komnata")
    @Column(name = "Комната", length = 16, unique = true, nullable = false)
    private UUID _komnataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Komnata", insertable = false, updatable = false)
    private Komnata komnata;

    @OneToMany(mappedBy = "registrvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodGostya> vxodgostyas;

    @OneToMany(mappedBy = "registrvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodSotrudnika> vxodsotrudnikas;


    public RegistrVxoda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}